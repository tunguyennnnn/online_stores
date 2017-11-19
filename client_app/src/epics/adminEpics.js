import * as AN from '../ActionName'
import * as Actions from '../actions/admin-actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'
import {receivedAdminInfo} from '../actions/admin-actions'

export function submitAccount (action$, store) {
  return action$.ofType(AN.SUBMIT_ADMIN_ACCOUNT)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      const request = {
        url: '/api/users/',
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        },
        body: formInput
      }
      return ajax(request)
        .map(v => AN.createAdminAccountSuccess(v))
        .catch(err => Observable.of({
          type: AN.SUBMIT_ADMIN_ACCOUNT_FAILED
        }))
    })
}

export function submitPlan (action$, store) {
  return action$.ofType(AN.SUBMIT_PLAN)
    .map(action => {
      console.log('reachhhhhh')
      return action.payload.formInput
    })
    .debounceTime(250)
    .mergeMap(formInput => {
      console.log(formInput)
      const request = {
        url: '/api/planSet/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: formInput
      }
      return ajax(request)
        .map(v => Actions.createPlanSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.SUBMIT_PLAN_FAILED
        }))
    })
}

export function submitPromotion (action$, store) {
  return action$.ofType(AN.SUBMIT_PROMOTIONAL_PLAN)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      const request = {
        url: '/api/promotionSet/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        },
        body: formInput
      }
      return ajax(request)
        .map(v => Actions.createPromotionSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.SUBMIT_PROMOTION_FAILED
        }))
    })
}

export function deleteItem (action$, store) {
  return action$.ofType(AN.DELETE_ITEM)
    .map(action => action.payload.itemId)
    .switchMap(itemId => {
      const request = {
        url: `/api/items/${itemId}`,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        }
      }
      return ajax.delete(request)
        .map(v => AN.deleteItemSuccess(v))
        .catch(err => Observable.of({
          type: AN.DELETE_ITEM_FAILED
        }))
    })
}

export function fetchAdmin (action$, store) {
  return action$.ofType(AN.FETCH_ADMIN)
    .switchMap(() => {
      console.log('reach')
      const {userId} = store.getState().auth || window.location.href.split('/').last()
      const request = {
        url: `/api/users/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => receivedAdminInfo(v.response))
        .catch(err => Observable.of({
          type: AN.FETCH_ADMIN_FAILED
        }))

    })
}
