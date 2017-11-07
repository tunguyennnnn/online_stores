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
      categorie: 'buyandsell',
      subCategorie: 'clothing'
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
      categorie: 'buyandsell',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
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
      categorie: 'rent',
      subCategorie: 'clothing'
    }
  ]
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
      const { filterOptions } = action.payload
      switch (filterOptions.type) {
        case 'CATEGORY_FILTER':
          return {
            ...state,
            data: mockData.filter(item => item.category === filterOptions.category)
          }
        case 'SUBCATEGORY_FILTER':
          return {
            ...state,
            data: mockData.filter(item => item.category === filterOptions.category && item.subCategorie === filterOptions.subCategorie)
          }
        case 'HOME_PAGE_FILTER':
          return {
            ...state,
            data: mockData.filter(item => !item.isSold)
          }
        default:
          return state
      }
    }
    default:
      return state
  }
}
