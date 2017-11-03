import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {login} from '../../actions/auth-actions'
import * as NavigationActions from '../../actions/navigation-actions'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    ...NavigationActions
  }, dispatch)
}

@connect(null, mapDispatchToProps)
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
    return this.setState({credentials})
  }

  onSave (event) {
    event.preventDefault()
    this.props.login(this.state.credentials)
  }

  render () {
    const style = {
      position: 'absolute',
      width: '300px',
      height: '200px',
      zIndex: '15',
      top: '50%',
      left: '50%',
      margin: '-100px 0 0 -150px',
      textAlign: 'center'
    }
    const styleButton = {left:'22%', position: 'absolute'}
    return (
      <div style={style}>
        <span><b><font size='16'>Online Store</font></b></span>
        <div class='ui divider'/>
        <form class='ui form'>
          <div class='field'>
            <input type='email' placeholder='E-mail address'  onChange={this.onChange} />
          </div>
          <div class='field'>
            <input type='password' placeholder='************' onChange={this.onChange} />
          </div>
            <div class='group'>
              <button class='ui button' onClick={this.onSave}>Login</button>
              <button class='ui button' onClick={this.props.navigateToSignupPage}>Register</button>
            </div>
        </form>
      </div>
    )
  }
}


export { Login }
