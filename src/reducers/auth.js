import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ME_SUCCESS,
  ME_ERROR,
  UPDATE_EMAIL_SUCCESS
} from '../constants/auth'

const initState = {
  user: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null
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
    case UPDATE_EMAIL_SUCCESS:
      return {
        user: {
          ...action.payload.user,
          email: action.payload.email
        }
      }
    default:
      return state
  }
}

export default auth
