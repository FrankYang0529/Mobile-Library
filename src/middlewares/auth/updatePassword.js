import { call, take } from 'redux-saga/effects'

import { UPDATE_PASSWORD_REQUEST } from '../../constants/auth'
import { updatePassword as updatePasswordApi } from '../../api/auth'

export function * updatePassword (action) {
  try {
    yield call(updatePasswordApi, action.payload)
  } catch (error) {
    console.log(error.message)
  }
}

function * watchUpdatePassword () {
  while (1) {
    const action = yield take(UPDATE_PASSWORD_REQUEST)
    yield call(updatePassword, action)
  }
}

export default watchUpdatePassword
