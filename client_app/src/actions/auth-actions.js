import auth from '../utils/auth'
import * as AN from '../ActionName'

export function signupSuccess (user) {
  auth.setSession(user)
  return {
    type: AN.SIGNUP_SUCCESS,
    payload: {user}
  }
}

export function loginSuccess (user) {
  auth.setSession(user)
  return {
    type: AN.LOGIN_SUCCESS,
    payload: {user}
  }
}

export function signup (formInput) {
  return {
    type: AN.SIGNUP,
    payload: {
      formInput
    }
  }
}


export function login (formInput) {
  return {
    type: AN.LOGIN,
    payload: {
      formInput
    }
  }
}

export function logout () {
  return {
    type: AN.LOGOUT
  }
}
