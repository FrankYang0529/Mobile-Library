import { call, put, take } from 'redux-saga/effects'

import { onMeSuccess } from '../../actions/auth'
import { ME_REQUEST } from '../../constants/auth'
import { me as meApi } from '../../api/auth'

export function * me (action) {
  try {
    const { user } = yield call(meApi)
    if (!user) {
      window.localStorage.removeItem('user')
      throw new Error('token expired')
    }

    window.localStorage.setItem('user', JSON.stringify(user))
    yield put(onMeSuccess({ user }))
  } catch (error) {
    console.log(error.message)
  }
}

function * watchMe () {
  while (1) {
    yield take(ME_REQUEST)
    yield call(me)
  }
}

export default watchMe
