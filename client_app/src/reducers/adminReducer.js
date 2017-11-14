import {hashHistory} from 'react-router'
import * as AN from '../ActionName'


const initialState = {
  items: [],
  promotions: [],
  plans: [],
  plan: false,
  promotion: false,
  account: false
}

export default function adminReducer (state = initialState, action) {
  switch (action.type) {
    case AN.RECEIVED_ADMIN_INFO: {
      console.log(action.payload)
      const {userId, email, items = [], plans = [], promotions = []} = action.payload.info
      return {
        ...state,
        items,
        plans,
        promotions
      }
    }
    case AN.SHOW_ALL_ITEMS_ADMIN_PAGE:
    case AN.FETCH_ADMIN_ITEMS: {
      return {
        ...state,
        plan: false,
        promotion: false,
        account: false
      }

    }
    case AN.FETCH_TRACTION_DETAIL: {

    }
    case AN.CREATE_ADMIN_ACCOUNT: {
      return {
        ...state,
        plan: false,
        promotion: false,
        account: true
      }
    }
    case AN.SUBMIT_ADMIN_ACCOUNT: {

    }
    case AN.CREATE_PROMOTIONAL_PLAN: {
      return {
        ...state,
        plan: false,
        account: false,
        promotion: true
      }
    }
    case AN.SUBMIT_PROMOTIONAL_PLAN: {

    }
    case AN.EDIT_PROMOTIONAL_PLAN: {

    }
    case AN.CREATE_PLAN: {
      return {
        ...state,
        promotion: false,
        account: false,
        plan: true
      }
    }
  }
  return state
}
