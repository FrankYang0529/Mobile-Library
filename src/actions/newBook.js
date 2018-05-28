import {
  LOAD_NEW_BOOK,
  CHANGE_NEW_BOOK_DATA,
  CREATE_NEW_BOOK_REQUEST
} from '../constants/newBook'

export const onLoadNewBook = ({ book }) => (
  {
    type: LOAD_NEW_BOOK,
    payload: { book }
  }
)

export const onChangeNewBookData = ({ book }) => (
  {
    type: CHANGE_NEW_BOOK_DATA,
    payload: { book }
  }
)

export const onCreateNewBookRequest = ({ book }) => (
  {
    type: CREATE_NEW_BOOK_REQUEST,
    payload: {
      book: {
        name: book.title,
        authors: (book.authors.length !== 0) ? book.authors : ['unknown'],
        publisher: book.publisher,
        imgLink: (book.imageLink) ? book.imageLink : 'https://s3-ap-northeast-1.amazonaws.com/mobile-library/default-book.png',
        isbn_10: book.isbn10,
        isbn_13: book.isbn13
      }
    }
  }
)
