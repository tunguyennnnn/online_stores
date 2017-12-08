import * as AN from '../ActionName'

export function report (payload) {
  return {
    type: AN.FETCH_REPORT,
    payload
  }
}

export function receivedReport (payload) {
  return {
    type: AN.FETCH_REPORT_SUCCESS,
    payload
  }
}
