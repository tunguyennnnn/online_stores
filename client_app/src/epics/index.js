import { combineEpics } from 'redux-observable'
import {fetchUserInfo, fetchUser, submitPost} from './userEpics'
import fetchAll from './fetchAll'
import {submitAccount, submitPlan, submitPromotion, deleteItem, fetchAdmin} from './adminEpics'
import {login, signup} from './authEpics'
export default combineEpics(
  fetchAdmin,
  submitPost,
  fetchAll,
  login,
  signup,
  submitAccount,
  fetchUser,
  submitPlan,
  submitPromotion,
  deleteItem
)
