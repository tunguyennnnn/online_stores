import {hashHistory} from 'react-router'
const _ = require('lodash')
import * as AN from '../ActionName'

const fetchedItems = {items: []}

function filterItems (state, filterOptions) {
  switch (filterOptions.type) {
    case 'CATEGORY':
      if (filterOptions.subCategory) {
        return {
          ...state,
          items: fetchedItems.items.filter((item) => item.category === filterOptions.category && item.subCategory === filterOptions.subCategory)
        }
      } else {
        return {
          ...state,
          items: fetchedItems.items.filter((item) => item.category === filterOptions.category)
        }
      }
    case 'PROVINCE':
      console.log(filterOptions.province)
      if (filterOptions.province !== 'All') {
        console.log('in all')
        return {
          ...state,
          items: fetchedItems.items.filter((item) => item.province === filterOptions.province)
        }
      } else {
        return {
          ...state,
          items: fetchedItems.items.filter(item => !item.isSold)
        }
      }
    case 'HOME':
      return {
        ...state,
        items: fetchedItems.items.filter(item => !item.isSold)
      }
    default:
      return state
  }
}

export default function (state = fetchedItems, action) {
  switch (action.type) {
    case AN.RECEIVED_ALL_ITEM: {
      fetchedItems.items = _.values(action.payload)
      return {
        ...state,
        items: fetchedItems.items
      }
    }
    case AN.FETCH_ALL_REJECTED: {
      hashHistory.push('/login')
      return {
        ...state
      }
    }
    case AN.FILTER_ITEMS: {
      return filterItems(state, action.payload.filterOptions)
    }
    default:
      return state
  }
}
