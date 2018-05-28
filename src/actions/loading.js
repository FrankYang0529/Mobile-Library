import {
  START_LOADING,
  STOP_LOADING
} from '../constants/loading'

export const onStartLoading = () => (
  {
    type: START_LOADING
  }
)

export const onStopLoading = () => (
  {
    type: STOP_LOADING
  }
)
