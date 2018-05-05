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
  const books = await Book.find({ owner: ctx.state.user._id }).exec()
  const booksJSON = books.map((book) => book.toObject())

  ctx.status = 200
  ctx.body = booksJSON
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
  updateBook,
  deleteBook
}