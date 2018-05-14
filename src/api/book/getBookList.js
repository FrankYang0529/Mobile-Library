import axios from 'axios'

const getBookList = async () => {
  const response = await axios.get(
    '/book',
    {
      withCredentials: true
    }
  )

  return response.data
}

export default getBookList
