import { call, take } from 'redux-saga/effects'

import { UPDATE_BOOK_REQUEST } from '../../constants/book'
import { updateBook as updateBookApi } from '../../api/book'

export function * updateBook (action) {
  try {
    yield call(updateBookApi, action.payload)
  } catch (error) {
    console.log(error)
  }
}

function * watchUpdateBook () {
  while (1) {
    const action = yield take(UPDATE_BOOK_REQUEST)
    yield call(updateBook, action)
  }
}

export default watchUpdateBook
