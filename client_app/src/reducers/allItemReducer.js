import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const mockData = [
  {
    imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
    title: 'Motocycle',
    description: 'It is free'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
    title: 'My House',
    description: 'It is far'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
    title: 'My Wife',
    description: 'She is invaluable'
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
