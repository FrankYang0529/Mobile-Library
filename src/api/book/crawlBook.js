import axios from 'axios'

const crawlBook = async ({ query }) => {
  const response = await axios.post(
    '/book/crawl',
    {
      query
    },
    {
      withCredentials: true
    }
  )

  return response.data
}

export default crawlBook
