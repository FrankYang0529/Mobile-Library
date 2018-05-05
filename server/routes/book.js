const Router = require('koa-router')

const book = require('../controllers/book')

const router = new Router()

router.post('/book', book.createBook)
router.get('/book', book.getBooks)

module.exports = router