import {hashHistory} from 'react-router'
const _ = require('lodash')
import * as AN from '../ActionName'

let fetchedData = {
  items: [],
  plans: [],
  available: false,
  plan: {},
  promotions: []
}

let pageState = {
  data: fetchedData,
  newPost: false,
  newRent: false,
  showAll: true
}

export default function (state = pageState, action) {
  switch (action.type) {
    case AN.ADD_NEW_POST: {
      return {
        ...state,
        newPost: true,
        newRent: false,
        showAll: false
      }
    }
    case AN.ADD_NEW_RENT: {
      return {
        ...state,
        newPost: false,
        newRent: true,
        showAll: false
      }
    }
    case AN.EDIT_POST: {
      return {
        ...state,
        newPost: true,
        newRent: false,
        postInfo: action.payload.postInfo
      }
    }
    case AN.CANCEL_POST: {
      return {
        ...state,
        newPost: false,
        newRent: false,
        showAll: true
      }
    }
    case AN.POST_ITEM_SUCCESS: {
      fetchedData.items = _.values(action.payload)
      return {
        ...state,
        showAll: true,
        newPost: false
      }
    }
    case AN.RECEIVED_USER_INFO: {
      const {userInfo} = action.payload
      console.log(userInfo)
      fetchedData = userInfo
      return {
        ...state,
        data: userInfo
      }
    }
    case AN.FETCH_USER_INFO_REJECTED: {
      hashHistory.push(`/login`)
      return {
        ...state,
        showAll: true,
        newPost: false
      }
    }
    case AN.USER_PURCHASED_PLAN_SUCCESS: {
      const {plans} = action.payload
      return {
        ...state,
        plans
      }
    }
    case AN.USER_PURCHASED_PLAN_FAILED: {
      return {
        ...state
      }
    }
    case AN.USER_PURCHASED_PROMOTION_SUCCESS: {
      return {
        ...state,
        items: _.values(action.payload)
      }
    }
    case AN.USER_PURCHASED_PROMOTION_FAILED: {
      return {
        ...state
      }
    }
  }
  return state
}
