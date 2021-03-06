import { combineEpics } from 'redux-observable'
import {fetchUser, submitPost, purchasePromotion, purchasePlan, userDeleteItem, rateAd, fetchStores} from './userEpics'
import { fetchAll } from './fetchAll'
import {submitAccount, submitPlan, submitPromotion, deleteItem, fetchAdmin} from './adminEpics'
import {login, signup} from './authEpics'
import {fetchReport} from './reportEpics'

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
  fetchStores,
  fetchReport
)
