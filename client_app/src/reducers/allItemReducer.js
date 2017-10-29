import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const mockData = [
  {'category':'BuyandSell',
  'subCategories':['Clothing','Books', 'Electronics','Cars']
  },
  {'category':'Rent',
  'subCategories':['Clothing','Books', 'Electronics','Cars']
  },
  {'category':'Services',
  'subCategories':['Clothing','Books', 'Electronics','Cars']
  }
]
export default function (state = mockData, action) {
  switch (action.type) {
    case AN.RECEIVED_ALL_ITEM: {
    }
    case AN.FETCH_ALL_REJECTED: {
      hashHistory.push('/')
      return {
        ...state,
        items: mockData
      }
      break
    }
  }
  return state
}
