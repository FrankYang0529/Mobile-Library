import { all } from 'redux-saga/effects'

// auth
import watchLogin from './auth/login'
import watchMe from './auth/me'
import watchLogout from './auth/logout'
import watchRegister from './auth/register'
// book
import watchGetBookList from './book/getBookList'
import watchGetBook from './book/getBook'

function * rootSaga () {
  yield all([
    watchLogin(),
    watchLogout(),
    watchMe(),
    watchRegister(),
    watchGetBookList(),
    watchGetBook()
  ])
}

export default rootSaga
