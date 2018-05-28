import {
  GET_BOOK_LIST_SUCCESS,
  GET_BOOK_SUCCESS,
  CRAWL_BOOK_SUCCESS,
  CHANGE_BOOK_DATA
} from '../constants/book'

const books = (state = [], action) => {
  switch (action.type) {
    case GET_BOOK_LIST_SUCCESS:
      return [...action.payload.books]
    case GET_BOOK_SUCCESS:
      return [action.payload.book]
    case CHANGE_BOOK_DATA:
      return [action.payload.book]
    case CRAWL_BOOK_SUCCESS:
      return [...action.payload.books]
    default:
      return state
  }
}

export default books
