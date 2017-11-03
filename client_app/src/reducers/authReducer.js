import auth from '../utils/auth'
import {hashHistory} from 'react-router'
import * as AN from '../ActionName'
const initialState = {
  user: null,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AN.LOGIN_SUCCESS: {
      hashHistory.push('/')
      return {
        ...state,
        user: action.payload.user
      }
    }
    case AN.LOGIN_FAIL: {
      hashHistory.push('/auth')
      return {
        ...state,
        error: action.payload.error
      }
    }
    case AN.SIGNUP_SUCCESS: {
      hashHistory.push('/')
      return {
        ...state,
        user: action.payload.user
      }
    }
    case AN.SIGNUP_FAIL: {
      hashHistory.push('/auth')
      return {
        ...state,
        error: action.payload.error
      }
    }
    default:
      return state
  }
}
