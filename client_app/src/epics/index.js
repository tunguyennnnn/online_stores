import { combineEpics } from 'redux-observable'
import fetchPersonalInfo from './fetchPersonalInfo'
import fetchAll from './fetchAll'
import submitPost from './submitNewPost'
export default combineEpics(
  submitPost,
  fetchAll,
  fetchPersonalInfo
)
