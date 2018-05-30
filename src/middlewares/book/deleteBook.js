import { call, put, take } from 'redux-saga/effects'

import { DELETE_BOOK_REQUEST } from '../../constants/book'
import { onPrimaryMessage, onDangerMessage } from '../../actions/alert'
import { deleteBook as deleteBookApi } from '../../api/book'

export function * deleteBook (action) {
  try {
    yield call(deleteBookApi, action.payload)
    yield put(onPrimaryMessage({ message: 'Delete Success' }))
  } catch (error) {
    yield put(onDangerMessage({ message: error.message }))
  }
}

function * watchDeleteBook () {
  while (1) {
    const action = yield take(DELETE_BOOK_REQUEST)
    yield call(deleteBook, action)
  }
}

export default watchDeleteBook
