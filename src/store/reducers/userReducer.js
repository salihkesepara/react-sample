import { Types } from 'src/store/actions/userActions'

const initialState = {
  userInfo: {
    data: {},
    isLoading: false
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_INFO_REQUEST:
      return {
        ...state,
        userInfo: {
          data: { },
          isLoading: true
        }
      }

    case Types.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          data: action.payload,
          isLoading: false
        }
      }

    case Types.GET_USER_INFO_FAILURE:
      return {
        ...state,
        userInfo: {
          data: {},
          isLoading: false
        }
      }

    default:
      return state
  }
}
