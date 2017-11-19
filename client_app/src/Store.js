import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import rootEpics from './epics'
import {hashHistory} from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers/AllReducers'

const epicMiddleware = createEpicMiddleware(rootEpics)

export default function configureStore (initialState) {
  const routingMiddleware = routerMiddleware(hashHistory)
  let enhancer = {}
  if (process.env.NODE_ENV === 'production') {
    enhancer = compose(
        applyMiddleware(
          epicMiddleware,
          thunk,
          routingMiddleware
        )
      )
  } else {
    enhancer = compose(
        applyMiddleware(epicMiddleware, thunk, routingMiddleware),
      )
  }
  return createStore(
    rootReducer,
    initialState,
    enhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
