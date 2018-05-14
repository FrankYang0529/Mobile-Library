import {
  CREATE_BOOK_REQUEST,
  GET_BOOK_LIST_REQUEST,
  GET_BOOK_LIST_SUCCESS,
  UPDATE_BOOK_REQUEST,
  DELETE_BOOK_REQUEST
} from '../constants/book'

export const onCreateBookRequest = (payload) => (
  {
    type: CREATE_BOOK_REQUEST,
    payload
  }
)

export const onGetBookListRequest = () => (
  {
    type: GET_BOOK_LIST_REQUEST
  }
)

export const onGetBookListSuccess = ({ books }) => (
  {
    type: GET_BOOK_LIST_SUCCESS,
    payload: { books }
  }
)

export const onUpdateBookRequest = (payload) => (
  {
    type: UPDATE_BOOK_REQUEST,
    payload
  }
)

export const onDeleteBookRequest = ({ _id }) => (
  {
    type: DELETE_BOOK_REQUEST,
    payload: { _id }
  }
)
