import * as AN from '../ActionName'

export function fetchStores () {
  return {
    type: AN.FETCH_STORES
  }
}

export function receivedStores (response) {
  return {
    type: AN.FETCH_STORES_SUCCESS,
    payload: response
  }
}
