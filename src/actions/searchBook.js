import { SEARCH_BOOK } from '../constants/searchBook'

export const onSearchBook = ({ keyword }) => (
  {
    type: SEARCH_BOOK,
    payload: { keyword }
  }
)
