import axios from 'axios'

const updateEmail = async ({ email }) => {
  if (!email) {
    return { message: 'Please fill in email Field' }
  }

  await axios.put(
    '/auth/email',
    {
      email
    },
    {
      withCredentials: true
    }
  )
}

export default updateEmail
