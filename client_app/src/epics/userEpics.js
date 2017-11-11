import * as AN from '../ActionName'
import {receivedUserInfo} from '../actions/navigation-actions'
import { postItemSuccess } from '../actions/personalPageAction'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export function fetchUser (action$, store) {
  return action$.ofType(AN.FETCH_USER_ITEMS)
    .map(action => action.payload.userEmail)
    .switchMap(userEmail => {
      const {auth} = store.getState()
      const userId = auth.userId || window.location.href.split('/').last()
      let request = {
        url: `/api/users/${userId}`,
        crossDomain: true,
        headers: {
          authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => receivedUserInfo(v.response.info))
        .catch(error => Observable.of({
          type: AN.FETCH_USER_INFO_REJECTED,
          payload: {
            userInfo: mock
          }
        }))
    })
}

export function submitPost (action$, store) {
  return action$.ofType(AN.SUBMIT_NEW_POST)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      const {userInfo} = store.getState()
      const {userId} = store.getState().auth || window.location.href.split('/').last()
      const request = {
        url: `/api/users/${userId}/items`,
        crossDomain: true,
        method: 'POST',
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
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
