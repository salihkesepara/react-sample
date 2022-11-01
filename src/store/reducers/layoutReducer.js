import { Types } from 'src/store/actions/layoutActions'

const initialState = {
  snackMessage: undefined
}

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_SNACK_MESSAGE:
      return {
        ...state,
        snackMessage: action.payload
      }

    default:
      return state
  }
}
