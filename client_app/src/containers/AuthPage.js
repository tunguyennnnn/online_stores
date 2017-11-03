import React from 'react'
import { Login } from './auth/Login'

export default class AuthPage extends React.Component {
  render () {
    const style = {backgroundColor: 'black'}
    return (
      <div style={style.main}>
        <Login />
      </div>
    )
  }
}
