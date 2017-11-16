import * as AN from '../ActionName'
import {loginSuccess, signupSuccess} from '../actions/auth-actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'

export function login (action$, store) {
  return action$.ofType(AN.LOGIN)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      console.log(formInput)
      const request = {
        url: '/apiapi/auth',
        method: 'POST',
        body: {
          ...formInput
        }
      }
      return ajax(request)
        .map(v => loginSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.LOGIN_FAIL,
          payload: {
            formInput
          }
        }))
    })
}


export function signup (action$, store) {
  return action$.ofType(AN.SIGNUP)
    .map(action => action.payload.formInput)
    .switchMap(formInput => {
      console.log(formInput)
      const request = {
        url: '/apiapi/users',
        method: 'POST',
        body: {
          ...formInput
        }
      }
      return ajax(request)
        .map(v => signupSuccess(v.response))
        .catch(err => Observable.of({
          type: AN.SIGNUP_FAIL,
          payload: {
            formInput
          }
        }))
    })
}
