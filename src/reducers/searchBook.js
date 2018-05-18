import { SEARCH_BOOK } from '../constants/searchBook'

const initState = {
  keyword: ''
}

const searchBook = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return { keyword: action.payload.keyword }
    default:
      return state
  }
}

export default searchBook
