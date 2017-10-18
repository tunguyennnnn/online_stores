import React from 'react'
import Login from './auth/Login'
import Signup from './auth/Signup'

export default class AuthPage extends React.Component {
  render () {
    const style = {backgroundColor: 'black'}
    return (
      <div class='row'>
        <div style={style} class='row col s12 m6 offset-m3'>
          <div class='col s12 m6'>
            <Login />
          </div>
          <div class='col s12 m6'>
            <Signup />
          </div>
        </div>
      </div>
    )
  }
}
