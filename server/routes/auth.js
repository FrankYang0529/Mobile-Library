const Router = require('koa-router')

const auth = require('../controllers/auth')

const router = new Router()

router.post('/auth/register', auth.register)
router.post('/auth/login', auth.login)
router.get('/auth/logout', auth.logout)
router.get('/auth/me', auth.me)
router.put('/auth/name', auth.updateName)
router.put('/auth/email', auth.updateEmail)
router.put('/auth/password', auth.updatePassword)

module.exports = router
