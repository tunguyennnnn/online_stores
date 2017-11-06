import { combineEpics } from 'redux-observable'
import fetchPersonalInfo from './fetchPersonalInfo'
import fetchAll from './fetchAll'
import submitPost from './submitNewPost'
import {submitAccount, submitPlan, submitPromotion, deleteItem} from './adminEpics'

export default combineEpics(
  submitPost,
  fetchAll,
  fetchPersonalInfo,
  submitAccount,
  submitPlan,
  submitPromotion,
  deleteItem
)
