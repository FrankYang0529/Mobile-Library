import { call, take } from 'redux-saga/effects'

import { CREATE_NEW_BOOK_REQUEST } from '../../constants/newBook'
import { createBook as createBookApi } from '../../api/book'

export function * createBook (action) {
  try {
    yield call(createBookApi, action.payload)
  } catch (error) {
    console.log(error.message)
  }
}

function * watchCreateBook () {
  while (1) {
    const action = yield take(CREATE_NEW_BOOK_REQUEST)
    yield call(createBook, action)
  }
}

export default watchCreateBook
