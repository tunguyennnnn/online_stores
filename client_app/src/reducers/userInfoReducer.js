import {hashHistory} from 'react-router'
const _ = require('lodash')
import * as AN from '../ActionName'

let fetchedData = {
  items: []
}

let pageState = {
  data: fetchedData,
  newPost: false,
  newRent: false,
  showAll: true
}

export default function (state = pageState, action) {
  console.log(action.type)
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
        showAll: true
      }
    }
    case AN.POST_ITEM_SUCCESS: {
      const {itemId, title, imageUrl, description, price, category} = action.payload
      fetchedData.items = _.concat({title, imageUrl, description, price}, fetchedData.items)
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
      const {userId, data} = action.payload.userInfo
      hashHistory.push(`/users/${userId}`)
      mockData.data = action.payload
      return {
        ...state,
        showAll: true,
        newPost: false
      }
    }
  }
  return state
}
