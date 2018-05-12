import axios from 'axios'

const register = async ({ email, firstName, lastName, password }) => {
  if (!email || !firstName || !lastName || !password) {
    return { message: 'Please fill in each field.' }
  }

  try {
    await axios.post(
      '/auth/register',
      {
        email,
        firstName,
        lastName,
        password
      },
      {
        withCredentials: true
      }
    )
  } catch (error) {
    return { message: error.message }
  }
}

export default register
