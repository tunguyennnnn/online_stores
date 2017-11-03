import * as AN from '../ActionName'

export function navigateToPersonalPage (userEmail) {
  return {
    type: AN.NAVIGATE_TO_PERSONAL_PAGE,
    payload: {
      userEmail
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

export function receivedAllContent (items) {
  return {
    type: AN.RECEIVED_ALL_ITEM,
    payload: {
      items
    }
  }
}

export function navigateToSignupPage () {
  return {
    type: AN.NAVIGATE_TO_SIGNUP_PAGE
  }
}
