import { all } from 'redux-saga/effects'

// auth
import watchLogin from './auth/login'
import watchMe from './auth/me'
import watchLogout from './auth/logout'
import watchRegister from './auth/register'
import watchUpdateEmail from './auth/updateEmail'
import watchUpdateName from './auth/updateName'
import watchUpdatePassword from './auth/updatePassword'
// book
import watchCreateBook from './book/createBook'
import watchGetBookList from './book/getBookList'
import watchGetBook from './book/getBook'
import watchUpdateBook from './book/updateBook'
import watchDeleteBook from './book/deleteBook'
import watchCrawlBook from './book/crawlBook'

function * rootSaga () {
  yield all([
    watchLogin(),
    watchLogout(),
    watchMe(),
    watchRegister(),
    watchUpdateEmail(),
    watchUpdateName(),
    watchUpdatePassword(),
    watchCreateBook(),
    watchGetBookList(),
    watchGetBook(),
    watchUpdateBook(),
    watchDeleteBook(),
    watchCrawlBook()
  ])
}

export default rootSaga
