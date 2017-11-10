import { combineEpics } from 'redux-observable'
import {fetchUserInfo, fetchUser, submitPost} from './userEpics'
import fetchAll from './fetchAll'
import {submitAccount, submitPlan, submitPromotion, deleteItem} from './adminEpics'
import {login, signup} from './authEpics'
export default combineEpics(
  submitPost,
  fetchAll,
  login,
  signup,
  fetchUserInfo,
  submitAccount,
  fetchUser,
  submitPlan,
  submitPromotion,
  deleteItem
)
