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

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/:userId' component={PersonalPage} />
      <Route path='/admin/:adminId' component={AdminPage} />
    </Router>
  </Provider>
, app)
