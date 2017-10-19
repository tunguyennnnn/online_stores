import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

export default function (state = {}, action) {
  switch (action.type) {
    case AN.NAVIGATE_TO_PERSONAL_PAGE: {
      hashHistory.push(`/${action.payload.userEmail}`)
      return state
      break
    }
  }
  return state
}
