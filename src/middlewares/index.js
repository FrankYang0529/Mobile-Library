import { all } from 'redux-saga/effects'

import watchLogin from './login'
import watchMe from './me'
import watchLogout from './logout'

function * rootSaga () {
  yield all([
    watchLogin(),
    watchLogout(),
    watchMe()
  ])
}

export default rootSaga
