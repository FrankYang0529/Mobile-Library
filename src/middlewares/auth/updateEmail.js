import { call, put, take } from 'redux-saga/effects'

import { UPDATE_EMAIL_REQUEST } from '../../constants/auth'
import { onUpdateEmailSuccess } from '../../actions/auth'
import { onPrimaryMessage, onDangerMessage } from '../../actions/alert'
import { updateEmail as updateEmailApi } from '../../api/auth'

export function * updateEmail (action) {
  try {
    yield call(updateEmailApi, action.payload)
    yield put(onUpdateEmailSuccess(action.payload))
    yield put(onPrimaryMessage({ message: 'Update Success' }))
  } catch (error) {
    yield put(onDangerMessage({ message: 'Update Failed' }))
  }
}

function * watchUpdateEmail () {
  while (1) {
    const action = yield take(UPDATE_EMAIL_REQUEST)
    yield call(updateEmail, action)
  }
}

export default watchUpdateEmail
