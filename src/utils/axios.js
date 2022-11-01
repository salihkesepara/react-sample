import axios from 'axios'
import { baseURL } from 'src/utils/config'
import _ from 'lodash'

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use((config) => {
  let token

  const removeToken = () => {
    try {
      localStorage.removeItem('auth')
    } catch(ex) {
      console.log('Token ken\'t remove from storage')
    }
  }

  const getToken = () => {
    try {
      const auth = localStorage.getItem('auth')
      token = JSON.parse(auth)?.token
      if (_.isEmpty(token)) {
        console.error('Token is empty')
      }
    } catch (error) {
      removeToken()
    }
  }

  getToken()

  config.headers = {
    Authorization: JSON.parse(localStorage.getItem('token-storage')),
    'Accept-Language': localStorage.getItem('i18nextLng') === 'en' ? 'en-US' : 'tr-TR',
    Token: token
  }

  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = '/'
      return
    }
    return Promise.reject(error)
  }
)

export default instance
