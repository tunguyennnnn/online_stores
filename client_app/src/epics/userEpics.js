import * as AN from '../ActionName'
import {receivedUserInfo} from '../actions/navigation-actions'
import { postItemSuccess, purchasePlanSuccess, purchasePromotionSuccess } from '../actions/personalPageAction'
import { receivedStores } from '../actions/storeAction'

import { rateSuccess } from '../actions/ratingAction'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export function fetchUser (action$, store) {
  return action$.ofType(AN.FETCH_USER_ITEMS)
    .map(action => action.payload)
    .switchMap(() => {
      const {auth} = store.getState()
      const userId = auth.userId || window.location.href.split('/').last()
      let request = {
        url: `/api/users/${userId === '' ? '1' : userId}`,
        crossDomain: true,
        headers: {
          authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => receivedUserInfo(v.response))
        .catch(error => Observable.of({
          type: AN.FETCH_USER_INFO_REJECTED
        }))
    })
}

export function rateAd (action$, store) {
  return action$.ofType(AN.RATE_AD)
  .map(action => action.payload)
  .switchMap((payload) => {
    let request = {
      url: '/api/rate',
      crossDomain: true,
      method: 'POST',
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
      },
      body: payload
    }
    return ajax(request)
    .map(v => rateSuccess(v.response))
    .catch(err => Observable.of({
      type: AN.RATE_AD_FAILED
    }))
  })
}

export function submitPost (action$, store) {
  return action$.ofType(AN.SUBMIT_NEW_POST)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      console.log(formInput)
      const request = {
        url: `/api/ads`,
        crossDomain: true,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: formInput
      }
      return ajax(request)
        .map(v => postItemSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.POST_ITEM_FAILED,
          payload: {
            formInput,
            error: 'Posting failed'
          }
        }))
    })
}

export function purchasePlan (action$, store) {
  return action$.ofType(AN.USER_PURCHASE_PLAN)
    .map(action => action.payload)
    .switchMap(({planId, cardDetail}) => {
      const request = {
        url: `/api/plans/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: {
          planId,
          cardDetail
        }
      }
      return ajax(request)
        .map(v => receivedUserInfo(v.response))
        .catch(err => Observable.of({
          type: AN.USER_PURCHASED_PLAN_FAILED
        }))
    })
}

export function purchasePromotion (action$, store) {
  return action$.ofType(AN.USER_PURCHASE_PROMOTION)
    .map(action => action.payload)
    .switchMap(({promotionId, itemId, cardDetail}) => {
      const request = {
        url: `/api/promotions/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: {
          promotionId,
          itemId,
          cardDetail
        }
      }
      return ajax(request)
        .map(v => receivedUserInfo(v.response))
        .catch(err => Observable.of({
          type: AN.USER_PURCHASED_PROMOTION_FAILED,
          payload: {
            promotionId,
            itemId,
            cardDetail,
            error: `Purchase for ${promotionId} with ${cardDetail} has been failed.`
          }
        }))
    })
}

export function userDeleteItem (action$, store) {
  return action$.ofType(AN.USER_DELETE_ITEM)
    .map(action => action.payload.itemId)
    .switchMap(itemId => {
      const request = {
        url: `/api/ads/${itemId}`,
        method: 'DELETE',
        crossDomain: true,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => receivedUserInfo(v.response))
        .catch(err => Observable.of({
          type: AN.DELETE_ITEM_SUCCESS
        }))
    })
}

export function fetchStores (action$, store) {
    return action$.ofType(AN.FETCH_STORES)
    .map(action => action.payload)
    .switchMap(() => {
      let request = {
        url: '/api/store',
        crossDomain: true,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
      .map(v => receivedStores(v.response))
      .catch(err => Observable.of({
        type: AN.FETCH_STORES_FAILED
      }))
    })
}
