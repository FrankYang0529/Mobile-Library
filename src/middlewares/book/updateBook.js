import { call, put, take } from 'redux-saga/effects'

import { UPDATE_BOOK_REQUEST } from '../../constants/book'
import { onPrimaryMessage, onDangerMessage } from '../../actions/alert'
import { updateBook as updateBookApi } from '../../api/book'

export function * updateBook (action) {
  try {
    yield call(updateBookApi, action.payload)
    yield put(onPrimaryMessage({ message: 'Update Success' }))
  } catch (error) {
    yield put(onDangerMessage({ message: 'Update Failed' }))
  }
}

function * watchUpdateBook () {
  while (1) {
    const action = yield take(UPDATE_BOOK_REQUEST)
    yield call(updateBook, action)
  }
}

export default watchUpdateBook
