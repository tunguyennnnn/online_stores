import './styles/style.css'
import './styles/materialize_grid.css'
import 'rxjs'
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import PersonalPage from './containers/PersonalPage'
import configStore from './Store'
import { Signup } from './containers/auth/Signup'
import { Login } from './containers/auth/Login'
import AdminPage from './containers/adminPage'
const store = configStore()

const app = document.getElementById('app')
Array.prototype.first = function () {
  return this[0]
}

Array.prototype.last = function () {
  return this[this.length - 1]
}

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/users/:userId' component={PersonalPage} />
      <Route path='/admins/:adminId' component={AdminPage} />
    </Router>
  </Provider>
, app)
