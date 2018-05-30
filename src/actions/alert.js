import {
  PRIMARY_MESSAGE,
  DANGER_MESSAGE,
  CLEAR_MESSAGE
} from '../constants/alert'

export const onPrimaryMessage = ({ message }) => (
  {
    type: PRIMARY_MESSAGE,
    payload: { message }
  }
)

export const onDangerMessage = ({ message }) => (
  {
    type: DANGER_MESSAGE,
    payload: { message }
  }
)

export const onClearMessage = () => (
  {
    type: CLEAR_MESSAGE
  }
)
