import { all } from 'redux-saga/effects'

import watchLogin from './login'
import watchMe from './me'
import watchLogout from './logout'
import watchRegister from './register'

function * rootSaga () {
  yield all([
    watchLogin(),
    watchLogout(),
    watchMe(),
    watchRegister()
  ])
}

export default rootSaga
