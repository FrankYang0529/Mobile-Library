import { call, put, take } from 'redux-saga/effects'

import { CREATE_NEW_BOOK_REQUEST } from '../../constants/newBook'
import { onPrimaryMessage, onDangerMessage } from '../../actions/alert'
import { createBook as createBookApi } from '../../api/book'

export function * createBook (action) {
  try {
    yield call(createBookApi, action.payload)
    yield put(onPrimaryMessage({ message: 'Create Success' }))
  } catch (error) {
    yield put(onDangerMessage({ message: error.message }))
  }
}

function * watchCreateBook () {
  while (1) {
    const action = yield take(CREATE_NEW_BOOK_REQUEST)
    yield call(createBook, action)
  }
}

export default watchCreateBook
