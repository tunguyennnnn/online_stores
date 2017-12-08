import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userInfoReducer from './userInfoReducer'
import allItemReducer from './allItemReducer'
import navigationReducer from './navigationReducer'
import adminReducer from './adminReducer'
import mainPageReducer from './mainPageReducer'
import report from './report'

const allReducers = combineReducers({
  allItems: allItemReducer,
  auth: authReducer,
  userInfo: userInfoReducer,
  navigation: navigationReducer,
  adminPage: adminReducer,
  mainPageState: mainPageReducer,
  report: report
})

export default allReducers
