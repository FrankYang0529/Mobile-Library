import {
  LOAD_NEW_BOOK,
  CHANGE_NEW_BOOK_DATA
} from '../constants/newBook'

const initState = {
  title: '',
  authors: [],
  publisher: '',
  isbn10: '',
  isbn13: ''
}

const newBook = (state = initState, action) => {
  switch (action.type) {
    case LOAD_NEW_BOOK:
      return {...action.payload.book}
    case CHANGE_NEW_BOOK_DATA:
      return {...action.payload.book}
    default:
      return state
  }
}

export default newBook
