import { combineEpics } from 'redux-observable'
import {fetchUserInfo, fetchUser, submitPost, purchasePromotion, purchasePlan, rateAd} from './userEpics'
import fetchAll from './fetchAll'
import {submitAccount, submitPlan, submitPromotion, deleteItem, fetchAdmin} from './adminEpics'
import {login, signup} from './authEpics'
export default combineEpics(
  fetchAdmin,
  submitPost,
  fetchAll,
  login,
  signup,
  purchasePromotion,
  purchasePlan,
  submitAccount,
  fetchUser,
  submitPlan,
  submitPromotion,
  deleteItem,
  rateAd
)
