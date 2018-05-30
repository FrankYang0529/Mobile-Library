import { call, put, take } from 'redux-saga/effects'

import { GET_BOOK_REQUEST } from '../../constants/book'
import { onGetBookSuccess } from '../../actions/book'
import { onDangerMessage } from '../../actions/alert'
import { getBook as getBookApi } from '../../api/book'

export function * getBook (action) {
  try {
    const { book } = yield call(getBookApi, action.payload)

    yield put(onGetBookSuccess({ book }))
  } catch (error) {
    yield put(onDangerMessage({ message: error.message }))
  }
}

function * watchGetBook () {
  while (1) {
    const action = yield take(GET_BOOK_REQUEST)
    yield call(getBook, action)
  }
}

export default watchGetBook
