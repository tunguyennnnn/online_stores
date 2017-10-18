import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {login} from '../../actions/auth-actions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (event) {
    const {type, value} = event.target
    const {credentials} = this.state
    credentials[type] = value
    console.log(credentials)
    return this.setState({credentials})
  }

  onSave (event) {
    event.preventDefault()
    this.props.login(this.state.credentials)
  }

  render () {
    return (
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='email' type='email' class='validate' onChange={this.onChange}></input>
              <label for='email'>Email</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='password' type='password' class='validate' onChange={this.onChange}></input>
              <label for='password'>Password</label>
            </div>
          </div>
          <div class='row'>
            <span class='waves-effect waves-light btn blue lighten-1' onClick={this.onSave}>Login</span>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
