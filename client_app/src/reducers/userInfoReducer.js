import {hashHistory} from 'react-router'
const _ = require('lodash')
import * as AN from '../ActionName'
let mockData = {
  userId: 1,
  items: [
    {
      itemId: '100',
      price: 30,
      imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
      title: 'Motocycle',
      description: 'It is free',
      postDate: '2017-1-1',
      completed: false
    },
    {
      itemId: '101',
      price: 30,
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My House',
      description: 'It is far',
      postDate: '2017-1-1',
      completed: false
    },
    {
      itemId: '102',
      price: 20,
      imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
      title: 'My Wife',
      description: 'She is invaluable',
      postDate: '2017-1-1',
      completed: true
    },
    {
      itemId: '101',
      price: 30,
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My House',
      description: 'It is far',
      postDate: '2017-1-1',
      completed: false
    },
    {
      itemId: '102',
      price: 20,
      imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
      title: 'My Wife',
      description: 'She is invaluable',
      postDate: '2017-1-1',
      completed: true
    },
    {
      itemId: '101',
      price: 30,
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My House',
      description: 'It is far',
      postDate: '2017-1-1',
      completed: false
    },
    {
      itemId: '102',
      price: 20,
      imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
      title: 'My Wife',
      description: 'She is invaluable',
      postDate: '2017-1-1',
      completed: true
    },
    {
      itemId: '101',
      price: 30,
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My House',
      description: 'It is far',
      postDate: '2017-1-1',
      completed: false
    },
    {
      itemId: '102',
      price: 20,
      imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
      title: 'My Wife',
      description: 'She is invaluable',
      postDate: '2017-1-1',
      completed: true
    }
  ]
}

let pageState = {
  data: mockData,
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
        data: mockData,
        showAll: true,
        newPost: false
      }
    }
    case AN.RECEIVED_USER_INFO: {
    }
    case AN.FETCH_USER_INFO_REJECTED: {
      const {userId, data} = action.payload.userInfo
      hashHistory.push(`/users/${userId}`)
      mockData.data = action.payload
      return {
        data: mockData,
        showAll: true,
        newPost: false
      }
    }
  }
  return state
}
