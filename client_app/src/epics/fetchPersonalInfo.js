import * as AN from '../ActionName'
import {receivedUserInfo} from '../actions/navigation-actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

const mock = {
  userId: 1,
  data: [
    {
      imageUrl: 'https://i.ebayimg.com/00/s/MjM2WDMxNQ==/z/n1sAAOSwYIxX89W6/$_57.JPG',
      title: 'Motocycle',
      description: 'It is free'
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/32/c1/4f/32c14ff606e5430916f8b77115baf648--my-dream-house-dream-houses.jpg',
      title: 'My House',
      description: 'It is far'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/fa/79/dd/fa79dd9f9974c993719cb1c17ef125ff.jpg',
      title: 'My Wife',
      description: 'She is invaluable'
    }
  ]
}

export default function fetchUserInfo (action$, store) {
  // console.log(store.getState())
  return action$.ofType(AN.NAVIGATE_TO_PERSONAL_PAGE)
    .map(action => action.payload.userEmail)
    .switchMap(userEmail => {
      let request = {
        url: `/api/info`,
        crossDomain: true,
        header: {
          Authorization: `Bearer ${window.localStorage.getItem('id_token')}`
        }
      }
      return ajax(request)
        .map(v => receivedUserInfo(mock))
        .catch(error => Observable.of({
          type: AN.FETCH_USER_INFO_REJECTED,
          payload: {
            userInfo: mock
          }
        }))
    })
}
