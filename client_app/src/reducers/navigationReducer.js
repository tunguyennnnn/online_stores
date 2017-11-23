import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const initialState = {
  user: null,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AN.RECEIVED_ALL_ITEM: {
      const {userId, email} = action.payload
      return {
        ...state,
        userId,
        email
      }
    }
    case AN.NAVIGATE_TO_PERSONAL_PAGE: {
      console.log(state)
      const {userId} = action.payload
      console.log(userId)
      hashHistory.push(`/users/${userId}`)
      return {
        ...state
      }
    }
    case AN.NAVIGATE_TO_SIGNUP_PAGE:
      hashHistory.push('/signup')
      return {
        ...state
      }
    case AN.NAVIGATE_TO_LOGIN_PAGE:
      hashHistory.push('/login')
      return {
        ...state
      }
    default:
      return state
  }
}
