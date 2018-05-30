import { call, put, take } from 'redux-saga/effects'

import { onLoginSuccess } from '../../actions/auth'
import { onDangerMessage, onClearMessage } from '../../actions/alert'
import { LOGIN_REQUEST } from '../../constants/auth'
import { login as loginApi } from '../../api/auth'

export function * login (action) {
  try {
    const { user } = yield call(loginApi, action.payload)
    if (!user) {
      throw new Error('Error Email or Password')
    }

    window.localStorage.setItem('user', JSON.stringify(user))
    yield put(onLoginSuccess({ user }))
    yield put(onClearMessage())
  } catch (error) {
    yield put(onDangerMessage({ message: error.message }))
  }
}

function * watchLogin () {
  while (1) {
    const action = yield take(LOGIN_REQUEST)
    yield call(login, action)
  }
}

export default watchLogin
