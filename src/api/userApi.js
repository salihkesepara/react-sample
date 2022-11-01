import axios from 'src/utils/axios'

const getClientUser = () => {
  const clientId = JSON.parse(localStorage.getItem('token-storage')) || undefined
  return clientId
}

export const getUserInformation = () => {
  return axios.get(`/user/getUserInformation?clientId=${getClientUser()}`)
}

export const getUserInformationById = (userId) => {
  const params = {
    userId
  }

  return axios.get('/user/getUserInformation', { params })
}
