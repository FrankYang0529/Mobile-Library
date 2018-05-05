const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, require: true },
  authors: [String],
  publisher: String,
  previewLink: String,
  isbn_10: String,
  isbn_13: String
})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book