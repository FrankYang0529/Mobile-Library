import axios from 'axios'

const updatePassword = async ({ oldPassword, newPassword, newPasswordTwice }) => {
  if (!oldPassword || !newPassword || !newPasswordTwice) {
    return { message: 'Please fill in each field' }
  }

  await axios.put(
    '/auth/password',
    {
      oldPassword,
      newPassword,
      newPasswordTwice
    },
    {
      withCredentials: true
    }
  )
}

export default updatePassword
