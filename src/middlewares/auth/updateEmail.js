import { call, put, take } from 'redux-saga/effects'

import { UPDATE_EMAIL_REQUEST } from '../../constants/auth'
import { onUpdateEmailSuccess } from '../../actions/auth'
import { updateEmail as updateEmailApi } from '../../api/auth'

export function * updateEmail (action) {
  try {
    yield call(updateEmailApi, action.payload)
    yield put(onUpdateEmailSuccess(action.payload))
  } catch (error) {
    console.log(error.message)
  }
}

function * watchUpdateEmail () {
  while (1) {
    const action = yield take(UPDATE_EMAIL_REQUEST)
    yield call(updateEmail, action)
  }
}

export default watchUpdateEmail
