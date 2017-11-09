import auth from '../utils/auth'
import {hashHistory} from 'react-router'
import * as AN from '../ActionName'
const initialState = {
  user: null,
  error: null
}

export default function (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case AN.LOGIN_SUCCESS: {
      const {userId} = action.payload.user
      hashHistory.push(`/users/${userId}`)
      return {
        ...state,
        user: userId
      }
    }
    case AN.LOGIN_FAIL: {
      hashHistory.push('/login')
      return {
        ...state,
        error: action.payload.error
      }
    }
    case AN.SIGNUP_SUCCESS: {
      const {userId} = action.payload.user
      hashHistory.push(`/users/${userId}`)
      return {
        ...state,
        user: userId
      }
    }
    case AN.SIGNUP_FAIL: {
      console.log('reachhhhhh')
      hashHistory.push('/')
      return {
        ...state,
        error: action.payload.error
      }
    }
    default:
      return state
  }
}
