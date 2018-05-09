import axios from 'axios'

const login = async ({ email, password }) => {
  try {
    if (!email || !password) {
      throw new Error('Missing email or password')
    }

    const response = await axios.post(
      '/auth/login',
      { email, password },
      { withCredentials: true }
    )

    return response.data
  } catch (error) {
    return { message: error.message }
  }
}

export default login