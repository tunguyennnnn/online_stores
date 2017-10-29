import { combineEpics } from 'redux-observable'
import fetchPersonalInfo from './fetchPersonalInfo'
import fetchAll from './fetchAll'

export default combineEpics(
  fetchAll,
  fetchPersonalInfo
)
