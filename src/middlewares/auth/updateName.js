import { call, put, take } from 'redux-saga/effects'

import { UPDATE_NAME_REQUEST } from '../../constants/auth'
import { onUpdateNameSuccess } from '../../actions/auth'
import { updateName as updateNameApi } from '../../api/auth'

export function * updateName (action) {
  try {
    yield call(updateNameApi, action.payload)
    yield put(onUpdateNameSuccess(action.payload))
  } catch (error) {
    console.log(error.message)
  }
}

function * watchUpdateName () {
  while (1) {
    const action = yield take(UPDATE_NAME_REQUEST)
    yield call(updateName, action)
  }
}

export default watchUpdateName
