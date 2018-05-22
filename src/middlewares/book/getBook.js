import { call, put, take } from 'redux-saga/effects'

import { onGetBookSuccess } from '../../actions/book'
import { GET_BOOK_REQUEST } from '../../constants/book'
import { getBook as getBookApi } from '../../api/book'

export function * getBook (action) {
  try {
    const { book } = yield call(getBookApi, action.payload)

    yield put(onGetBookSuccess({ book }))
  } catch (error) {
    console.log(error.message)
  }
}

function * watchGetBook () {
  while (1) {
    const action = yield take(GET_BOOK_REQUEST)
    yield call(getBook, action)
  }
}

export default watchGetBook
