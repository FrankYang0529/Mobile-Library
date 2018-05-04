const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

/**
 * @api {post} /auth/register Register a user
 * @apiName SignUp
 * @apiGroup auth
 *
 * @apiParam (Request body) {String} email    User email.
 * @apiParam (Request body) {String} name     User name.
 * @apiParam (Request body) {String} password User password.
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

    const token = jwt.sign({
      user: user.toJSON(),
    }, process.env.SECRET, { expiresIn: process.env.MAX_AGE/1000 })

    ctx.status = 200
    ctx.body = user.toJSON()
    ctx.cookies.set('token', token, {
      domain: process.env.ALLOW_DOMAIN,
      path: '/',
      maxAge: process.env.MAX_AGE,
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

/**
 * @api {get} /auth/me Get user information
 * @apiName GetMe
 * @apiGroup auth
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "name": "Frank",
 *    "email": "tmp@gmail.com"
 *  }
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 403 Forbidden
 */

module.exports = {
  register,
  login,
}