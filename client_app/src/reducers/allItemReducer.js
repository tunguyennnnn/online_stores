import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const mockData = {
  items: [
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'BUY_AND_SELL',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://static.pexels.com/photos/2255/black-and-white-city-houses-skyline.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'BUY_AND_SELL',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'RENT',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'rent',
      subCategory: 'clothing'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My house',
      description: 'From the outside this house looks gorgeous. It has been built with oak wood and has mahogany wooden decorations. ',
      price: 3000000000,
      postDate: '2017-1-1',
      completed: false,
      address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
      phoneNumber: '514-123-1234',
      adType: 'Buy',
      forSaleBy: 'Owner',
      category: 'rent',
      subCategory: 'clothing'
    }
  ]
}
function filterItems (state, filterOptions) {
  switch (filterOptions.type) {
    case 'CATEGORY':
      return {
        ...state,
        items: mockData.items.filter((item) => item.category === filterOptions.category)
      }
    case 'SUBCATEGORY':
      return {
        ...state,
        items: mockData.items.filter(item => item.category === filterOptions.category && item.subCategory === filterOptions.subCategory)
      }
    case 'HOME':
      return {
        ...state,
        items: mockData.items.filter(item => !item.isSold)
      }
    default:
      return state
  }
}

export default function (state = mockData, action) {
  switch (action.type) {
    // case AN.RECEIVED_ALL_ITEM: {
    // }
    //   break
    case AN.FETCH_ALL_REJECTED: {
      hashHistory.push('/')
      return {
        ...state,
        data: mockData
      }
    }
    case AN.FILTER_ITEMS: {
      return filterItems(state, action.payload.filterOptions)
    }
    default:
      return state
  }
}
