import { all } from 'redux-saga/effects'

import watchLogin from './login'

function *rootSaga() {
  yield all([
    watchLogin()
  ])
}

export default rootSaga