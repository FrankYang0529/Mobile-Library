import axios from 'axios'

const deleteBook = async ({ id }) => {
  try {
    await axios.delete(
      `/book/${id}`,
      { withCredentials: true }
    )
  } catch (error) {
    return { message: error.message }
  }
}

export default deleteBook
