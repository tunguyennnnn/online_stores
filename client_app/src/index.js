import './styles/style.css'
import 'rxjs'
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { MainPage } from './containers/MainPage'
import AuthPage from './containers/AuthPage'
import PersonalPage from './containers/PersonalPage'
import configStore from './Store'
import { Signup } from './containers/auth/Signup'

const store = configStore()

const app = document.getElementById('app')

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={MainPage}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/auth' component={AuthPage}></Route>
      <Route path='/:userId' component={PersonalPage}></Route>
    </Router>
  </Provider>
, app)
