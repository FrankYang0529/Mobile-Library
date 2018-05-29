const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

/**
 * @api {post} /auth/register Register a user
 * @apiName SignUp
 * @apiGroup auth
 *
 * @apiParam (Request body) {String} email     User email.
 * @apiParam (Request body) {String} firstName User first name.
 * @apiParam (Request body) {String} lastName  User last name.
 * @apiParam (Request body) {String} password  User password.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 Created
 *
 * @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 406 Not Acceptable
 *  {
 *    "message": "Email has been registered."
 *  }
 */
const register = async (ctx, next) => {
  const { email, firstName, lastName, password } = ctx.request.body
  if (!email || !firstName || !lastName || !password) {
    ctx.throw(400, 'Please fill in each field.')
  }

  try {
    const isExist = await User.count({ email })
    if (isExist) {
      ctx.throw(406, 'Email has been registered.')
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = new User({
      email,
      firstName,
      lastName,
      password: hashPassword
    })
    await user.save()

    ctx.status = 201
  } catch (error) {
    ctx.throw(error.status || 500, error.message)
  }
}

/**
 * @api {post} /auth/login Login a user
 * @apiName Login
 * @apiGroup auth
 *
 * @apiParam (Request body) {String} email    User email.
 * @apiParam (Request body) {String} password User password.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "user": {
 *      "_id": "5aec12683c812fdb68ec4d0f",
 *      "email": "tmp@tmp.com",
 *      "firstName": "foo",
 *      "lastName": "bar"
 *    }
 *  }
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 */
const login = async (ctx, next) => {
  const { email, password } = ctx.request.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      ctx.throw(400, 'Can not find user')
    }

    const isSame = await bcrypt.compare(password, user.password)
    if (!isSame) {
      ctx.throw(401, 'Email or Password error')
    }

    const token = jwt.sign(
      user.toJSON(),
      process.env.SECRET, { expiresIn: process.env.MAX_AGE / 1000 }
    )

    ctx.status = 200
    ctx.body = {
      user: user.toJSON()
    }
    ctx.cookies.set('token', token, {
      domain: process.env.ALLOW_DOMAIN,
      path: '/',
      maxAge: +process.env.MAX_AGE,
      httpOnly: true
    })
  } catch (error) {
    ctx.throw(error.status || 500, error.message)
  }
}

/**
 * @api {get} /auth/logout Logout a user
 * @apiName Logout
 * @apiGroup auth
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
const logout = async (ctx, next) => {
  ctx.status = 200
  ctx.cookies.set('token', null)
}

/**
 * @api {get} /auth/me Get user information
 * @apiName GetMe
 * @apiGroup auth
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "user": {
 *      "_id": "5aec12683c812fdb68ec4d0f",
 *      "email": "tmp@tmp.com",
 *      "firstName": "foo",
 *      "lastName": "bar"
 *    }
 *  }
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 */
const me = async (ctx, next) => {
  const user = await User.findById(ctx.state.user._id)

  ctx.status = 200
  ctx.body = {
    user: user.toJSON()
  }
}

/**
 * @api {put} /auth/name Update user name
 * @apiName UpdateUsername
 * @apiGroup auth
 *
 * @apiParam (Request body) {String} firstName User first name.
 * @apiParam (Request body) {String} lastName  User last name.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 */
const updateName = async (ctx, next) => {
  const { firstName, lastName } = ctx.request.body

  await User.findByIdAndUpdate(
    ctx.state.user._id,
    {
      firstName,
      lastName
    }
  )

  ctx.status = 200
}

/**
 * @api {put} /auth/email Update user email
 * @apiName UpdateEmail
 * @apiGroup auth
 *
 * @apiParam (Request body) {String} email User email.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 */
const updateEmail = async (ctx, next) => {
  const { email } = ctx.request.body

  await User.findByIdAndUpdate(
    ctx.state.user._id,
    {
      email
    }
  )

  ctx.status = 200
}

module.exports = {
  register,
  login,
  logout,
  me,
  updateName,
  updateEmail
}
