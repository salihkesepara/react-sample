import { combineReducers } from 'redux'
import { userReducer } from 'src/store/reducers/userReducer'
import { layoutReducer } from 'src/store/reducers/layoutReducer'

const rootReducer = combineReducers({
  user: userReducer,
  layout: layoutReducer
})

export default rootReducer
