import * as AN from '../ActionName'
import * as Actions from '../actions/admin-actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'


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
      return ajax.post(request)
        .map(v => AN.createAdminAccountSuccess(v))
        .catch(err => Observable.of({
          type: AN.SUBMIT_ADMIN_ACCOUNT_FAILED
        }))
    })
}

export function submitPlan (action$, store) {
  return action$.ofType(AN.SUBMIT_PLAN)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      const request = {
        url: '/api/plans/',
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        },
        body: formInput
      }
      return ajax.post(request)
        .map(v => AN.createPlanSuccess(v))
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
        url: '/api/promotions/',
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        },
        body: formInput
      }
      return ajax.post(request)
        .map(v => AN.createPromotionSuccess(v))
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
        header: {
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
