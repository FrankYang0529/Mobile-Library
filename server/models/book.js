const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, require: true },
  authors: [String],
  publisher: String,
  previewLink: String,
  imgLink: String,
  isbn_10: String,
  isbn_13: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

BookSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    return {
      _id: ret._id,
      name: ret.name,
      authors: ret.authors,
      publisher: ret.publisher || '',
      previewLink: ret.previewLink || '',
      imgLink: ret.imgLink || '',
      isbn_10: ret.isbn_10 || '',
      isbn_13: ret.isbn_13 || '',
      created_at: ret.created_at.toGMTString()
    }
  }
})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book
