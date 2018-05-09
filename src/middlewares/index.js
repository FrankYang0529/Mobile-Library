import { all } from 'redux-saga/effects'

import watchLogin from './login'
import watchMe from './me'

function *rootSaga() {
  yield all([
    watchLogin(),
    watchMe()
  ])
}

export default rootSaga