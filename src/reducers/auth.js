import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ME_SUCCESS,
  ME_ERROR
} from '../constants/auth'

const initState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { user: action.payload.user }
    case LOGOUT_SUCCESS:
      return { user: null }
    case ME_SUCCESS:
      return { user: action.payload.user }
    case ME_ERROR:
      return { user: null }
    default:
      return state
  }
}

export default auth