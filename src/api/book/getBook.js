import axios from 'axios'

const getBook = async ({ id }) => {
  const response = await axios.get(
    `/book/${id}`,
    {
      withCredentials: true
    }
  )

  return response.data
}

export default getBook
