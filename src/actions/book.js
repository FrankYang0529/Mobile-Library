import {
  CREATE_BOOK_REQUEST,
  GET_BOOK_LIST_REQUEST,
  GET_BOOK_LIST_SUCCESS,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  UPDATE_BOOK_REQUEST,
  DELETE_BOOK_REQUEST,
  CHANGE_BOOK_DATA
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

export const onGetBookRequest = ({ id }) => (
  {
    type: GET_BOOK_REQUEST,
    payload: { id }
  }
)

export const onGetBookSuccess = ({ book }) => (
  {
    type: GET_BOOK_SUCCESS,
    payload: { book }
  }
)

export const onUpdateBookRequest = ({ book }) => (
  {
    type: UPDATE_BOOK_REQUEST,
    payload: { book }
  }
)

export const onDeleteBookRequest = ({ _id }) => (
  {
    type: DELETE_BOOK_REQUEST,
    payload: { _id }
  }
)

export const onChangeBookData = ({ book }) => (
  {
    type: CHANGE_BOOK_DATA,
    payload: { book }
  }
)
