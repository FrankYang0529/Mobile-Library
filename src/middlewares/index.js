import { all } from 'redux-saga/effects'

// auth
import watchLogin from './auth/login'
import watchMe from './auth/me'
import watchLogout from './auth/logout'
import watchRegister from './auth/register'
// book
import watchGetBookList from './book/getBookList'
import watchGetBook from './book/getBook'
import watchUpdateBook from './book/updateBook'
import watchDeleteBook from './book/deleteBook'

function * rootSaga () {
  yield all([
    watchLogin(),
    watchLogout(),
    watchMe(),
    watchRegister(),
    watchGetBookList(),
    watchGetBook(),
    watchUpdateBook(),
    watchDeleteBook()
  ])
}

export default rootSaga
