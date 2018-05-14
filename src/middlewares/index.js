import { all } from 'redux-saga/effects'

import watchLogin from './auth/login'
import watchMe from './auth/me'
import watchLogout from './auth/logout'
import watchRegister from './auth/register'

function * rootSaga () {
  yield all([
    watchLogin(),
    watchLogout(),
    watchMe(),
    watchRegister()
  ])
}

export default rootSaga
