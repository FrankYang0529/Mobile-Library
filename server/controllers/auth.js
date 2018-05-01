/**
 * @api {post} /auth/singup Create a user
 * @apiName SignUp
 * @apiGroup auth
 *
 * @apiParam (Request body) {String} email    User email.
 * @apiParam (Request body) {String} name     User name.
 * @apiParam (Request body) {String} password User password.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 400 Bad Request
 *  {
 *    "message": "Email has been registered."
 *  }
 */

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