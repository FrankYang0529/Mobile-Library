import React from 'react'
import { connect } from 'react-redux'

import { onLoginRequest } from '../../actions/auth'

export const LoginPage = ({ onLoginRequestAction }) => {
  let emailField = null
  let passwordField = null

  return (
    <form>
      <input
        type='text'
        ref={el => emailField = el}
      />
      <input
        type='password'
        ref={el => passwordField = el}
      />
      <button
        type='submit'
        onClick={(e) => {
          e.preventDefault()
          onLoginRequestAction({
            email: emailField.value,
            password: passwordField.value
          })

          passwordField.value = ''
        }}
      > Login
      </button>
    </form>
  )
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoginRequestAction: (username, password) => {
      dispatch(onLoginRequest(username, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)