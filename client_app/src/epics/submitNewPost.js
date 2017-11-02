import * as AN from '../ActionName'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'
import { postItemSuccess } from '../actions/personalPageAction'

export default function submitPost (action$, store) {
  return action$.ofType(AN.SUBMIT_NEW_POST)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      const {userInfo} = store.getState()
      const {id} = userInfo.data
      const request = {
        url: `/api/users/${id}/items`,
        crossDomain: true,
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        },
        body: formInput
      }
      return ajax.post(request)
        .map(v => postItemSuccess(v))
        .catch(err => Observable.of({
          type: AN.POST_ITEM_SUCCESS,
          payload: {
            formInput
          }
        }))
    })
}
