import * as AN from '../ActionName'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'
import { receivedReport } from '../actions/report'

export function fetchReport (action$, store) {
  return action$.ofType(AN.FETCH_REPORT)
    .map(action => action.payload)
    .switchMap((action) => {
      console.log(action)
      const {id} = action
      const request = {
        url: `/api/report/${id}`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => {
          return receivedReport(v.response)
        })
        .catch(error => Observable.of({
          type: AN.FETCH_REPORT_FAILED,
          payload: {}
        }))
    })
}
