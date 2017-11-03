import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {signup} from '../../actions/auth-actions'
import * as NavigationActions from '../../actions/navigation-actions'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signup,
    ...NavigationActions
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
    return this.setState({signupInfo})
  }

  onSave (event) {
    event.preventDefault()
    const {signupInfo} = this.state
    if (true) { //TODO check the fields
      this.props.signup(signupInfo)
    } else {
      //TODO show error messages
    }
  }

  render () {
    const style = {
      position: 'absolute',
      width: '300px',
      height: '200px',
      zIndex: '15',
      top: '40%',
      left: '50%',
      margin: '-100px 0 0 -150px',
      textAlign: 'center'
    }
    return (
      <div style={style}>
        <span><b><font size='16'>Online Store</font></b></span>
        <div class="ui divider"></div>
        <form class='ui form'>
          <div class='field'>
            <input placeholder='Firstname' type='text' onChange={this.onChange} />
          </div>
          <div class='field'>
            <input placeholder='Lastname' type='text' onChange={this.onChange} />
          </div>
          <div class='field'>
            <input placeholder='E-mail address' type='text' onChange={this.onChange} />
          </div>
          <div class='field'>
            <input placeholder='***********' type='password' onChange={this.onChange} />
          </div>
          <div class='group'>
            <button class='ui button' onClick={this.props.navigateToLoginPage}>Back</button>
            <button class='ui button' onClick={this.onSave}>Signup</button>
          </div>
        </form>
      </div>
    )
  }
}

export { Signup }
