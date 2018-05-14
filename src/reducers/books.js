import {
  GET_BOOK_LIST_SUCCESS
} from '../constants/book'

const books = (state = [], action) => {
  switch (action.type) {
    case GET_BOOK_LIST_SUCCESS:
      return [...action.payload.books]
    default:
      return state
  }
}

export default books
