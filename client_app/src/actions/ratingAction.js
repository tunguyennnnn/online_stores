import * as AN from '../ActionName'

export function rateAd (payload) {
  console.log('rateAd', payload)
  return {
    type: AN.RATE_AD,
    payload: payload
  }
}

export function rateSuccess () {
  return {
    type: AN.RATE_AD_SUCCESS
  }
}
