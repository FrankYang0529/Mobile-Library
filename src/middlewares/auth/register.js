import { call, put, take } from 'redux-saga/effects'

import { REGISTER_REQUEST } from '../../constants/auth'
import { onPrimaryMessage, onDangerMessage } from '../../actions/alert'
import { register as registerApi } from '../../api/auth'

export function * register (action) {
  try {
    yield call(registerApi, action.payload)
    yield put(onPrimaryMessage({ message: 'Register Success!' }))
  } catch (error) {
    yield put(onDangerMessage({ message: error.message }))
  }
}

function * watchRegister () {
  while (1) {
    const action = yield take(REGISTER_REQUEST)
    yield call(register, action)
  }
}

export default watchRegister
