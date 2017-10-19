import * as AN from '../ActionName'

export function navigateToPersonalPage (userEmail) {
  console.log(userEmail)
  return {
    type: AN.NAVIGATE_TO_PERSONAL_PAGE,
    payload: {
      userEmail
    }
  }
}
