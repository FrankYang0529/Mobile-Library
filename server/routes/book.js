const Router = require('koa-router')

const book = require('../controllers/book')

const router = new Router()

router.post('/book', book.createBook)
router.get('/book', book.getBooks)
router.post('/book/crawl', book.crawlBooks)
router.get('/book/:id', book.getBook)
router.put('/book/:id', book.updateBook)
router.delete('/book/:id', book.deleteBook)

module.exports = router
