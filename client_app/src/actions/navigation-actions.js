import * as AN from '../ActionName'

export function navigateToPersonalPage (userId) {
  console.log(userId)
  return {
    type: AN.NAVIGATE_TO_PERSONAL_PAGE,
    payload: {
      userId
    }
  }
}

export function receivedUserInfo (userInfo) {
  return {
    type: AN.RECEIVED_USER_INFO,
    payload: {
      userInfo
    }
  }
}

export function navigateToHomePage () {
  return {
    type: AN.NAVIGATE_TO_HOME_PAGE
  }
}

export function receivedAllContent (data) {
  return {
    type: AN.RECEIVED_ALL_ITEM,
    payload: {
      ...data
    }
  }
}

export function navigateToSignupPage () {
  return {
    type: AN.NAVIGATE_TO_SIGNUP_PAGE
  }
}

export function navigateToLoginPage () {
  return {
    type: AN.NAVIGATE_TO_LOGIN_PAGE
  }
}
