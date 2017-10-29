import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userInfoReducer from './userInfoReducer'
import allItemReducer from './allItemReducer'

const allReducers = combineReducers({
  items: allItemReducer,
  auth: authReducer,
  userInfo: userInfoReducer
})

export default allReducers
