import { call, put, take } from 'redux-saga/effects'

import { UPDATE_PASSWORD_REQUEST } from '../../constants/auth'
import { onPrimaryMessage, onDangerMessage } from '../../actions/alert'
import { updatePassword as updatePasswordApi } from '../../api/auth'

export function * updatePassword (action) {
  try {
    yield call(updatePasswordApi, action.payload)
    yield put(onPrimaryMessage({ message: 'Update Success' }))
  } catch (error) {
    yield put(onDangerMessage({ message: 'Update Failed' }))
  }
}

function * watchUpdatePassword () {
  while (1) {
    const action = yield take(UPDATE_PASSWORD_REQUEST)
    yield call(updatePassword, action)
  }
}

export default watchUpdatePassword
