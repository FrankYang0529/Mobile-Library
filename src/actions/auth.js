import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  ME_REQUEST,
  ME_SUCCESS,
  ME_ERROR,
  REGISTER_REQUEST,
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