import auth from '../utils/auth'
import * as AN from '../ActionName'

function signupSuccess (user) {
  return {
    type: AN.SIGNUP_SUCCESS,
    payload: {user}
  }
}

function signupFail (error) {
  return {
    type: AN.SIGNUP_FAIL,
    payload: {error}
  }
}

function loginSuccess (user) {
  return {
    type: AN.LOGIN_SUCCESS,
    payload: {user}
  }
}

function loginFail (error) {
  return {
    type: AN.LOGIN_FAIL,
    payload: {error}
  }
}

export function signup (user) {
  return (dispatch) => {
    return auth.register(user, (success, res) => {
      if (success) {
        dispatch(signupSuccess(res))
      } else {
        dispatch(signupFail(res))
      }
    })
  }
}


export function login (user) {
  return (dispatch) => {
    return auth.login(user, (success, res) => {
      if (success) {
        dispatch(loginSuccess(res))
      } else {
        dispatch(loginFail(res))
      }
    })
  }
}
