import axios from 'axios'

const createBook = async ({ book }) => {
  await axios.post(
    '/book',
    book,
    {
      withCredentials: true
    }
  )
}

export default createBook
