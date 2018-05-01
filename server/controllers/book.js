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
 *  HTTP/1.1 200 OK
 */

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
 *        "id": "xxx",
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

/**
 * @api {put} /book/id Modify a book
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
 */