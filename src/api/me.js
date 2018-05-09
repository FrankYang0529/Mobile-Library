import axios from 'axios'

const me = async () => {
  try {
    const response = await axios.get('/auth/me', { withCredentials: true })
    return response.data
  } catch (error) {
    return { message: error.message }
  }
}

export default me