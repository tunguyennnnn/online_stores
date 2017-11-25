import * as AN from '../ActionName'
import { receivedAllContent } from '../actions/navigation-actions'
import { receivedAdScores } from '../actions/ratingAction'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export function fetchAll (action$, store) {
  return action$.ofType(AN.NAVIGATE_TO_HOME_PAGE)
    .switchMap(() => {
      const request = {
        url: '/api/ads',
        method: 'GET',
        headers: {
          authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
        }
      }
      return ajax(request)
        .map(v => {
          console.log(v)
          return receivedAllContent(v.response)
        })
        .catch(error => Observable.of({
          type: AN.FETCH_ALL_REJECTED,
          payload: {

          }
        }))
    })
}

// export function fetchRatings (action$, store) {
//   console.log('in userEpics fetching ratings')
//   return action$.ofType(AN.FETCH_RATINGS)
//   .map(action => action.payload)
//   .switchMap(() => {
//     const {auth} = store.getState
//     let request = {
//       url: '/api/rate',
//       crossDomain: true,
//       headers: {
//         authorization: `Bearer ${window.localStorage.getItem('apiToken')}`
//       }
//     }
//     return ajax(request)
//     .map(v => receivedAdScores(v.response))
//     .catch(error => Observable.of({
//       type: AN.FETCH_RATINGS_FAILED
//     }))
//   })
// }
