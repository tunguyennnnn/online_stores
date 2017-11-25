import {hashHistory} from 'react-router'
import * as AN from '../ActionName'
const _ = require('lodash')

const initialState = {
  items: [],
  promotions: [],
  plans: [],
  plan: false,
  promotion: false,
  account: false,
  transaction: false,
  transactions: []
}

export default function adminReducer (state = initialState, action) {
  switch (action.type) {
    case AN.RECEIVED_ADMIN_INFO: {
      const {userId, email, items = [], plans = [], promotions = [], transactions = []} = action.payload
      return {
        ...state,
        items,
        plans,
        promotions,
        transactions
      }
    }
    case AN.SHOW_ALL_ITEMS_ADMIN_PAGE:
    case AN.FETCH_ADMIN_ITEMS: {
      return {
        ...state,
        plan: false,
        promotion: false,
        account: false,
        transaction: false
      }
    }
    case AN.CREATE_PROMOTION_SUCCESS: {
      const {promotions} = action.payload
      return {
        ...state,
        plan: false,
        promotion: true,
        transaction: false,
        account: false,
        promotions
      }
    }
    case AN.CREATE_PLAN_SUCCESS: {
      return {
        ...state,
        plans: _.values(action.payload),
        plan: true,
        promotion: false,
        account: false,
        transaction: false
      }
    }
    case AN.FETCH_TRACTION_DETAIL: {

    }
    case AN.CREATE_ADMIN_ACCOUNT: {
      return {
        ...state,
        plan: false,
        promotion: false,
        account: true,
        transaction: false
      }
    }
    case AN.SUBMIT_ADMIN_ACCOUNT: {

    }
    case AN.CREATE_PROMOTIONAL_PLAN: {
      return {
        ...state,
        plan: false,
        promotion: true,
        account: false,
        transaction: false
      }
    }
    case AN.SHOW_TRANSACTION: {
      return {
        ...state,
        plan: false,
        promotion: false,
        account: false,
        transaction: true
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
