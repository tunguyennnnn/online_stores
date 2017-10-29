import * as AN from '../ActionName'
import {receivedAllContent} from '../actions/navigation-actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export default function fetchAll (action$, store) {
  return action$.ofType(AN.NAVIGATE_TO_HOME_PAGE)
    .switchMap(() => {
      const request = {
        url: '/api/',
        crossDomain: true,
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        }
      }
      return ajax(request)
        .map(v => receivedAllContent(mock))
        .catch(error => Observable.of({
          type: AN.FETCH_ALL_REJECTED,
          payload: {

          }
        }))
    })
}
