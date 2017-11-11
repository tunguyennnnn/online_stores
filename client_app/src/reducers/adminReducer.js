import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const initialState = {
  items: true,
  plan: false,
  promotion: false,
  account: false
}

export default function adminReducer (state = initialState, action) {
  switch (action.type) {
    case AN.RECEIVED_ADMIN_INFO: {
      console.log(action.payload.info)
      return state
    }
    case AN.SHOW_ALL_ITEMS_ADMIN_PAGE:
    case AN.FETCH_ADMIN_ITEMS: {
      return {
        ...initialState,
        items: true
      }
    }
    case AN.FETCH_TRACTION_DETAIL: {

    }
    case AN.CREATE_ADMIN_ACCOUNT: {
      return {
        ...initialState,
        account: true
      }
    }
    case AN.SUBMIT_ADMIN_ACCOUNT: {

    }
    case AN.CREATE_PROMOTIONAL_PLAN: {
      return {
        ...initialState,
        promotion: true
      }
    }
    case AN.SUBMIT_PROMOTIONAL_PLAN: {

    }
    case AN.EDIT_PROMOTIONAL_PLAN: {

    }
    case AN.CREATE_PLAN: {
      return {
        ...initialState,
        plan: true
      }
    }
  }
  return state
}
