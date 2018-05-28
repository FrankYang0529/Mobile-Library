import { call, put, take } from 'redux-saga/effects'

import { onCrawlBookSuccess } from '../../actions/book'
import { onStartLoading, onStopLoading } from '../../actions/loading'
import { CRAWL_BOOK_REQUEST } from '../../constants/book'
import { crawlBook as crawlBookApi } from '../../api/book'

export function * crawlBook (action) {
  try {
    yield put(onStartLoading())

    const books = yield call(crawlBookApi, action.payload)
    console.log(books)
    yield put(onCrawlBookSuccess({ books }))

    yield put(onStopLoading())
  } catch (error) {
    console.log(error.message)
  }
}

function * watchCrawlBook () {
  while (1) {
    const action = yield take(CRAWL_BOOK_REQUEST)
    yield call(crawlBook, action)
  }
}

export default watchCrawlBook
