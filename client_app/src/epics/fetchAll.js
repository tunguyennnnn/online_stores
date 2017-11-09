import * as AN from '../ActionName'
import {receivedAllContent} from '../actions/navigation-actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export default function fetchAll (action$, store) {
  return action$.ofType(AN.NAVIGATE_TO_HOME_PAGE)
    .switchMap(() => {
      const request = {
        url: '/api/items',
        method: 'GET',
        headers: {
          authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => {
          console.log(v)
          return receivedAllContent(v.response.items)
        })
        .catch(error => Observable.of({
          type: AN.FETCH_ALL_REJECTED,
          payload: {

          }
        }))
    })
}
