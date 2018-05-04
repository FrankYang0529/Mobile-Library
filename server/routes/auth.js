const Router = require('koa-router')

const auth = require('../controllers/auth')

const router = new Router()

router.post('/auth/register', auth.register)
router.post('/auth/login', auth.login)

module.exports = router