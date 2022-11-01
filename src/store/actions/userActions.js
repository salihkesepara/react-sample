export const Types = {
  GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST',
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILURE: 'GET_USER_INFO_FAILURE'
}

export const getUserInfoRequest = (navigate) => ({
  type: Types.GET_USER_INFO_REQUEST,
  navigate
})

export const getUserInfoSuccess = (payload) => ({
  type: Types.GET_USER_INFO_SUCCESS,
  payload
})

export const getUserInfoFailure = () => ({
  type: Types.GET_USER_INFO_FAILURE
})
