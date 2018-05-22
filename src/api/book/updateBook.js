import axios from 'axios'

const updateBook = async ({ book }) => {
  try {
    await axios.put(
      `/book/${book._id}`,
      book,
      { withCredentials: true }
    )
  } catch (error) {
    return { message: error.message }
  }
}

export default updateBook
