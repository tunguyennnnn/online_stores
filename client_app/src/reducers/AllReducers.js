import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userInfoReducer from './userInfoReducer'
import allItemReducer from './allItemReducer'
import navigationReducer from './navigationReducer'

const allReducers = combineReducers({
  items: allItemReducer,
  auth: authReducer,
  userInfo: userInfoReducer,
  navigation: navigationReducer
})

export default allReducers
