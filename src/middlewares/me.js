import { call, put, take } from 'redux-saga/effects'

import { onMeSuccess } from '../actions/auth'
import { ME_REQUEST } from '../constants/auth'
import { me as meApi} from '../api'

export function* me(action) {
  try {
    const { user } = yield call(meApi)
    if (!user) {
      localStorage.removeItem('user')
      throw new Error('token expired')
    }

    localStorage.setItem('user', JSON.stringify(user))
    yield put(onMeSuccess({ user }))
  } catch (error) {
    console.log(error.message)
  }
}

function* watchMe() {
  while (1) {
    yield take(ME_REQUEST)
    yield call(me)
  }
}

export default watchMe