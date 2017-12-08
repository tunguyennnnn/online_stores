import * as AN from '../ActionName'

export function report (payload) {
  return {
    type: AN.FETCH_REPORT,
    payload
  }
}

export function receivedReport (payload) {
  console.log(payload)
  return {
    type: AN.FETCH_REPORT_SUCCESS,
    payload
  }
}
