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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
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
      forSaleBy: 'Owner'
    }
  ]
}

export default function (state = mockData, action) {
  switch (action.type) {
    case AN.RECEIVED_ALL_ITEM: {
    }
    case AN.FETCH_ALL_REJECTED: {
      hashHistory.push('/')
      return {
        ...state,
        data: mockData
      }
      break
    }
  }
  return state
}
