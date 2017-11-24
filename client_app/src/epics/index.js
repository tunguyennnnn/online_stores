import { combineEpics } from 'redux-observable'
import {fetchUser, submitPost, purchasePromotion, purchasePlan, userDeleteItem, rateAd} from './userEpics'
import { fetchAll } from './fetchAll'
import {submitAccount, submitPlan, submitPromotion, deleteItem, fetchAdmin} from './adminEpics'
import {login, signup} from './authEpics'

export default combineEpics(
  fetchAdmin,
  submitPost,
  fetchAll,
  login,
  userDeleteItem,
  signup,
  purchasePromotion,
  purchasePlan,
  submitAccount,
  fetchUser,
  submitPlan,
  submitPromotion,
  deleteItem,
  rateAd,
)
