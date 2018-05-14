import axios from 'axios'

const logout = async () => {
  try {
    await axios.get('/auth/logout', { withCredentials: true })
  } catch (error) {
    return { message: error.message }
  }
}

export default logout
