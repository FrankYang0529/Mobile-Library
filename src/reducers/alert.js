import {
  PRIMARY_MESSAGE,
  DANGER_MESSAGE,
  CLEAR_MESSAGE
} from '../constants/alert'

const initState = {
  color: '',
  message: ''
}

const alert = (state = initState, action) => {
  switch (action.type) {
    case PRIMARY_MESSAGE:
      return {
        color: 'primary',
        message: action.payload.message
      }
    case DANGER_MESSAGE:
      return {
        color: 'danger',
        message: action.payload.message
      }
    case CLEAR_MESSAGE:
      return {
        color: '',
        message: ''
      }
    default:
      return state
  }
}

export default alert
