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
      password: '',
      city: 'Montreal',
      province: 'Quebec',
      userType:'Particular'
    }}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (event) {
    const {id, value} = event.target
    const {signupInfo} = this.state
    if (id === 'location') {
      const [city, province] = value.split('-')
      signupInfo.city = city
      signupInfo.province  = province
    } else {
      signupInfo[id] = value
    }
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
        <div class='ui divider'></div>
        <form class='ui form'>
          <div class='field'>
            <input id='firstName' placeholder='First name' type='text' onChange={this.onChange} />
          </div>
          <div class='field'>
            <input id='lastName' placeholder='Last name' type='text' onChange={this.onChange} />
          </div>
          <div class='field'>
            <input id='email' placeholder='E-mail address' type='text' onChange={this.onChange} />
          </div>
          <div class='field'>
            <input id='password' placeholder='***********' type='password' onChange={this.onChange} />
          </div>
          <div class='field'>
            <select id='location' class='ui dropdown' style={{width: '111%'}} onChange={this.onChange}>
              <option value='Montreal-Quebec'>Montreal - Quebec</option>
              <option value='Vancouver-British Columbia'>Vancouver - British Columbia</option>
              <option value='Ottawa-Ontario'>Ottawa - Ontario</option>
              <option value='Winnipeg-Manitoba'>Winnipeg - Manitoba</option>
            </select>
          </div>
          <div class='field'>
            <select id='userType' class='ui dropdown' style={{width: '111%'}} onChange={this.onChange}>
              <option value='Particular'> Particular</option>
              <option value='Business'> Business</option>
            </select>
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
