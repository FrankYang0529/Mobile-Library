import { call, put, take } from 'redux-saga/effects'

import { onGetBookListSuccess } from '../../actions/book'
import { GET_BOOK_LIST_REQUEST } from '../../constants/book'
import { getBookList as getBookListApi } from '../../api/book'

export function * getBookList () {
  try {
    const { books, message } = yield call(getBookListApi)
    if (message) {
      throw new Error(message)
    }

    yield put(onGetBookListSuccess({ books }))
  } catch (error) {
    console.log(error.message)
  }
}

function * watchGetBookList () {
  while (1) {
    yield take(GET_BOOK_LIST_REQUEST)
    yield call(getBookList)
  }
}

export default watchGetBookList
