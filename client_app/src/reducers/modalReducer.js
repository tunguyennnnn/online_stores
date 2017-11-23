import {hashHistory} from 'react-router'
import * as AN from '../ActionName'

const initialState = {
  status: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AN.OPEN_MODAL:
      return {
        ...state,
        status: action.payload
      }
    case AN.CLOSE_MODAL:
      return {
        ...state,
        status: action.payload
      }
    default:
      return {...state}
  }
}
