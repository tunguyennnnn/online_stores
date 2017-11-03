import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const mockData = [
  {
    imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
    title: 'Motocycle',
    description: 'It is free',
    price: 30,
    postDate: '2017-1-1',
    completed: false,
    address: '7141 Sherbrooke St W, Montreal, QC H4B 1R6',
    phoneNumber: '514-123-1234',
    adType: 'Buy',
    forSaleBy: 'Owner'
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
