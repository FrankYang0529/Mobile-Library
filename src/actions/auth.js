import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  ME_REQUEST,
  ME_SUCCESS,
  ME_ERROR,
  REGISTER_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_NAME_REQUEST
} from '../constants/auth'

export const onLoginRequest = ({ email, password }) => (
  {
    type: LOGIN_REQUEST,
    payload: {
      email,
      password
    }
  }
)

export const onLoginSuccess = ({ user }) => (
  {
    type: LOGIN_SUCCESS,
    payload: { user }
  }
)

export const onLogoutRequest = () => (
  {
    type: LOGOUT_REQUEST
  }
)

export const onLogoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS
  }
)

export const onMeRequest = () => (
  {
    type: ME_REQUEST
  }
)

export const onMeSuccess = ({ user }) => (
  {
    type: ME_SUCCESS,
    payload: { user }
  }
)

export const onMeError = () => (
  {
    type: ME_ERROR
  }
)

export const onRegisterRequest = ({ email, firstName, lastName, password }) => (
  {
    type: REGISTER_REQUEST,
    payload: {
      email,
      firstName,
      lastName,
      password
    }
  }
)

export const onUpdateEmailRequest = ({ user, email }) => (
  {
    type: UPDATE_EMAIL_REQUEST,
    payload: { user, email }
  }
)

export const onUpdateEmailSuccess = ({ user, email }) => (
  {
    type: UPDATE_EMAIL_SUCCESS,
    payload: { user, email }
  }
)

export const onUpdateNameRequest = ({ firstName, lastName }) => (
  {
    type: UPDATE_NAME_REQUEST,
    payload: { firstName, lastName }
  }
)
