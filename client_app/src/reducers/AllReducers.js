import {combineReducers} from 'redux'
import authReducer from './authReducer'
import navigationReducer from './navigationReducer'
const allReducers = combineReducers({
  auth: authReducer,
  navigation: navigationReducer
})

export default allReducers
