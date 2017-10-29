import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {signup} from '../../actions/auth-actions'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signup
  }, dispatch)
}

@connect(null, mapDispatchToProps)
class Signup extends React.Component {
  constructor () {
    super()
    this.state = {signupInfo: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (event) {
    const {id, value} = event.target
    const {signupInfo} = this.state
    signupInfo[id] = value
    console.log(signupInfo)
    return this.setState({signupInfo})
  }

  onSave (event) {
    event.preventDefault()
    const {signupInfo} = this.state
    console.log(signupInfo)
    if (true) { //TODO check the fields
      this.props.signup(signupInfo)
    } else {
      //TODO show error messages
    }
  }

  render () {
    return (
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='firstName' type='text' class='validate' onChange={this.onChange}></input>
              <label for='firstName'>First Name</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='lastName' type='text' class='validate' onChange={this.onChange}></input>
              <label for='lastName'>Last Name</label>
            </div>
          </div>
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
            <button class='waves-effect waves-light btn blue lighten-1' onClick={this.onSave}>Signup</button>
          </div>
        </form>
      </div>
    )
  }
}

export { Signup }
