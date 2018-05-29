import axios from 'axios'

const updateName = async ({ firstName, lastName }) => {
  if (!firstName || !lastName) {
    return { message: 'Please fill in First Name or Last Name Field' }
  }

  await axios.put(
    '/auth/name',
    {
      firstName,
      lastName
    },
    {
      withCredentials: true
    }
  )
}

export default updateName
