import { call, put, take } from 'redux-saga/effects'

import { onLoginSuccess } from '../actions/auth'
import { LOGIN_REQUEST } from '../constants/auth'
import { login as loginApi} from '../api'

export function* login(action) {
  try {
    const { user, message } = yield call(loginApi, action.payload)
    if (!user) {
      throw new Error(message)
    }

    localStorage.setItem('user', JSON.stringify(user))
    yield put(onLoginSuccess({ user }))
  } catch (error) {
    console.log(error)
  }
}

function* watchLogin() {
  while (1) {
    const action = yield take(LOGIN_REQUEST)
    yield call(login, action)
  }
}

export default watchLogin