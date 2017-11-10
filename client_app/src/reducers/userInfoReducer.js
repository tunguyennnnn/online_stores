import {hashHistory} from 'react-router'
const _ = require('lodash')
import * as AN from '../ActionName'

let fetchedData = {
  items: []
}

let pageState = {
  data: fetchedData,
  newPost: false,
  showAll: true
}

export default function (state = pageState, action) {
  console.log(action.type)
  switch (action.type) {
    case AN.ADD_NEW_POST: {
      return {
        ...state,
        newPost: true,
        showAll: false
      }
    }
    case AN.EDIT_POST: {
      return {
        ...state,
        newPost: true,
        showAll: false,
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
      const {formInput} = action.payload
      const {title, imageUrl, description, price} = formInput
      mockData.items = _.uniqBy(_.concat({title, imageUrl, description, price}, mockData.items), (o) => o.itemId)
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
