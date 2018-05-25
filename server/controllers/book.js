const searchBook = require('search-book')

const Book = require('../models/book')

/**
 * @api {post} /book Create a book
 * @apiName CreateBook
 * @apiGroup book
 *
 * @apiParam (Request body) {String} name      Book name.
 * @apiParam (Request body) {String[]} authors List of authors (Array of Strings).
 * @apiParam (Request body) {String} publisher Publisher of the book.
 * @apiParam (Request body) {String} previewLink Preview link of the book.
 * @apiParam (Request body) {String} [isbn_10] 10-digit ISBN of the book.
 * @apiParam (Request body) {String} [isbn_13] 13-digit ISBN of the book.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 Created
 */
const createBook = async (ctx, next) => {
  if (!ctx.request.body.name) {
    ctx.throw(400, 'Please input book name.')
  }

  const book = Book({
    ...ctx.request.body,
    owner: ctx.state.user._id
  })
  await book.save()

  ctx.status = 201
}

/**
 * @api {get} /book Get book list
 * @apiName GetBooks
 * @apiGroup book
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "books": [
 *      {
 *        "_id": "5aed5b082db4167285600786",
 *        "name": "Thinking, Fast and Slow",
 *        "authors": ["Daniel Kahneman"],
 *        "publisher": "Penguin Group UK",
 *        "previewLink": "http://www.books.com.tw/products/F011910346",
 *        "isbn_10": "0141033576",
 *        "isbn_13": ""
 *      }
 *    ]
 *  }
 */
const getBooks = async (ctx, next) => {
  const books = await Book.find({ owner: ctx.state.user._id }).sort('-created_at').exec()
  const booksJSON = books.map((book) => book.toJSON())

  ctx.status = 200
  ctx.body = { books: booksJSON }
}

/**
 * @api {post} /book/crawl Crawl books
 * @apiName CrawlBooks
 * @apiGroup book
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "books": [
 *      {
 *        title: '橡皮擦計畫：兩位天才心理學家，一段改變世界的情誼',
 *        authors: [ '麥可．路易士', '吳凱琳' ],
 *        publisher: '早安財經',
 *        link: 'http://search.books.com.tw/redirect/move/key/%E5%BF%AB%E6%80%9D%E6%85%A2%E6%83%B3/area/mid/item/0010782516/page/1/idx/20/cat/001/pdf/1',
 *        imageLink: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/078/25/0010782516.jpg&w=85&h=120&v=5aab9cfc',
 *        isbn10: '',
 *        isbn13: '9789866613944'
 *      }
 *    ]
 *  }
 */
const crawlBooks = async (ctx, next) => {
  const books = await searchBook('book', ctx.request.body.query)
  ctx.body = { books }
}

/**
 * @api {get} /book/id Get book
 * @apiName GetBook
 * @apiGroup book
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "book": {
*       "_id": "5aed5b082db4167285600786",
*       "name": "Thinking, Fast and Slow",
*       "authors": ["Daniel Kahneman"],
*       "publisher": "Penguin Group UK",
*       "previewLink": "http://www.books.com.tw/products/F011910346",
*       "isbn_10": "0141033576",
*       "isbn_13": ""
*     }
 *  }
 */
const getBook = async (ctx, next) => {
  let book = null
  try {
    book = await Book.findById(ctx.params.id)
  } catch (error) {
    ctx.throw(404, 'Book is not found')
  }

  ctx.status = 200
  ctx.body = { book: book.toJSON() }
}

/**
 * @api {put} /book/id Update a book
 * @apiName UpdateBook
 * @apiGroup book
 *
 * @apiParam {String} id ID of the book.
 *
 * @apiParam (Request body) {String} name      Book name.
 * @apiParam (Request body) {String[]} authors List of authors (Array of Strings).
 * @apiParam (Request body) {String} publisher Publisher of the book.
 * @apiParam (Request body) {String} previewLink Preview link of the book.
 * @apiParam (Request body) {String} [isbn_10] 10-digit ISBN of the book.
 * @apiParam (Request body) {String} [isbn_13] 13-digit ISBN of the book.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
const updateBook = async (ctx, next) => {
  if (!ctx.request.body.name) {
    ctx.throw(400, 'Please input book name.')
  }

  await Book.findByIdAndUpdate(
    ctx.params.id,
    ctx.request.body
  )

  ctx.status = 200
}

/**
 * @api {delete} /book/id Delete a book
 * @apiName DeleteBook
 * @apiGroup book
 *
 * @apiParam {String} id ID of the book.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
const deleteBook = async (ctx, next) => {
  await Book.findByIdAndRemove(ctx.params.id)

  ctx.status = 200
}

module.exports = {
  createBook,
  getBooks,
  crawlBooks,
  getBook,
  updateBook,
  deleteBook
}
