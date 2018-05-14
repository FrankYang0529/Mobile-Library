import { call, put, take } from 'redux-saga/effects'

import { onLogoutSuccess } from '../../actions/auth'
import { LOGOUT_REQUEST } from '../../constants/auth'
import { logout as logoutApi } from '../../api/auth'

export function * logout () {
  try {
    yield call(logoutApi)
    window.localStorage.removeItem('user')
    yield put(onLogoutSuccess())
  } catch (error) {
    console.log(error)
  }
}

function * watchLogout () {
  while (1) {
    yield take(LOGOUT_REQUEST)
    yield call(logout)
  }
}

export default watchLogout
