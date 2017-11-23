import * as AN from '../ActionName'
import {receivedUserInfo} from '../actions/navigation-actions'
import { postItemSuccess, purchasePlanSuccess, purchasePromotionSuccess } from '../actions/personalPageAction'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export function fetchUser (action$, store) {
  return action$.ofType(AN.FETCH_USER_ITEMS)
    .map(action => action.payload)
    .switchMap(() => {
      const {auth} = store.getState()
      const userId = auth.userId || window.location.href.split('/').last()
      console.log(userId)
      let request = {
        url: `/api/users/${userId}`,
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

export function submitPost (action$, store) {
  return action$.ofType(AN.SUBMIT_NEW_POST)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
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
          type: AN.POST_ITEM_SUCCESS,
          payload: {
            formInput
          }
        }))
    })
}

export function purchasePlan (action$, store) {
  return action$.ofType(AN.USER_PURCHASE_PLAN)
    .map(action => action.payload.planId)
    .switchMap(planId => {
      const request = {
        url: `/api/plans/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: {
          planId
        }
      }
      return ajax(request)
        .map(v => purchasePlanSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.USER_PURCHASED_PLAN_FAILED
        }))
    })
}

export function purchasePromotion (action$, store) {
  return action$.ofType(AN.USER_PURCHASE_PROMOTION)
    .map(action => action.payload)
    .switchMap(({promotionId, itemId}) => {
      const request = {
        url: `/api/promotions/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: {
          promotionId,
          itemId
        }
      }
      return ajax(request)
        .map(v => purchasePromotionSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.USER_PURCHASED_PROMOTION_FAILED
        }))
    })
}
