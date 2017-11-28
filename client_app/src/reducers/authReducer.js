import auth from '../utils/auth'
import {hashHistory} from 'react-router'
import * as AN from '../ActionName'
const initialState = {
  user: null,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AN.RECEIVED_USER_INFO: {
      const {userId} = action.payload.userInfo
      return {
        userId,
        ...state
      }
    }
    case AN.LOGIN_SUCCESS: {
      const {userId, isAdmin} = action.payload.user
      hashHistory.push(`/${isAdmin ? 'admins' : 'users'}/${userId}`)
      return {
        ...state,
        user: userId,
        error: ''
      }
    }
    case AN.LOGIN_FAIL: {
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
      hashHistory.push('/')
      return {
        ...state,
        error: action.payload.error
      }
    }
    case AN.LOGOUT: {
      window.localStorage.setItem('apiToken', null)
      window.localStorage.setItem('expiresAt', null)
      hashHistory.push('/login')
      return initialState
    }
    case AN.UPDATE_MESSAGE: {
      return {
        ...state,
        error: ''
      }
    }
    default:
      return state
  }
}
