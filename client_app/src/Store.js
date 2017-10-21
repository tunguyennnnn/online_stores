import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {browserHistory} from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import AllReducers from './reducers/AllReducers'

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerMiddleware(browserHistory), thunk)
)

export default store
