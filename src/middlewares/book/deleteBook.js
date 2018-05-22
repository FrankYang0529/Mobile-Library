import { call, take } from 'redux-saga/effects'

import { DELETE_BOOK_REQUEST } from '../../constants/book'
import { deleteBook as deleteBookApi } from '../../api/book'

export function * deleteBook (action) {
  try {
    yield call(deleteBookApi, action.payload)
  } catch (error) {
    console.log(error)
  }
}

function * watchDeleteBook () {
  while (1) {
    const action = yield take(DELETE_BOOK_REQUEST)
    yield call(deleteBook, action)
  }
}

export default watchDeleteBook
