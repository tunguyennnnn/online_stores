import * as AN from '../ActionName'
const _ = require('lodash')

const initialState = {
  report: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AN.FETCH_REPORT_SUCCESS: {
      const { report = [] } = action.payload
      return {
        ...state,
        report
      }
    }
    default:
      return state
  }
}
