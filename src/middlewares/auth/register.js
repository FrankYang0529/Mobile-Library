import { call, take } from 'redux-saga/effects'

import { REGISTER_REQUEST } from '../../constants/auth'
import { register as registerApi } from '../../api/auth'

export function * register (action) {
  try {
    yield call(registerApi, action.payload)
  } catch (error) {
    console.log(error.message)
  }
}

function * watchRegister () {
  while (1) {
    const action = yield take(REGISTER_REQUEST)
    yield call(register, action)
  }
}

export default watchRegister
