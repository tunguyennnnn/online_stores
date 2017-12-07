import {hashHistory} from 'react-router'
const _ = require('lodash')
import * as AN from '../ActionName'

const fetchedItems = {items: []}

function filterItems (state, filterOptions) {
  switch (filterOptions.type) {
    case 'CATEGORY': {
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
    }
    case 'PROVINCE': {
      if (filterOptions.province !== 'All') {
        console.log(filterOptions.province)
        if (filterOptions.category && filterOptions.subCategory) {
          console.log(filterOptions.province)
          return {
            ...state,
            items: fetchedItems.items.filter((item) => item.province === filterOptions.province && item.category === filterOptions.category && item.subCategory === filterOptions.subCategory)
          }
        } else if (filterOptions.category) {
          return {
            ...state,
            items: fetchedItems.items.filter((item) => item.province === filterOptions.province && item.category === filterOptions.category)
          }
        }
      } else {
        console.log(filterOptions.province)
        if (filterOptions.category && filterOptions.subCategory) {
          return {
            ...state,
            items: fetchedItems.items.filter(item => !item.isSold && item.category === filterOptions.category && item.subCategory === filterOptions.subCategory)
          }
        } else if (filterOptions.category) {
          return {
            ...state,
            items: fetchedItems.items.filter(item => !item.isSold && item.category === filterOptions.category)
          }
        }
      }
    }
      break
    case 'HOME': {
      return {
        ...state,
        items: fetchedItems.items.filter(item => !item.isSold)
      }
    }
    default:
      return state
  }
}

export default function (state = fetchedItems, action) {
  switch (action.type) {
    case AN.RECEIVED_ALL_ITEM: {
      fetchedItems.items = _.values(action.payload)
      hashHistory.push('/')
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
