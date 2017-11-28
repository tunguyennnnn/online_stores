import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {signup} from '../../actions/auth-actions'
import * as NavigationActions from '../../actions/navigation-actions'
import {Button, Form, Grid, Input} from 'semantic-ui-react'

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
      userType:'Owner'
    },
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false
  }
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
    const {signupInfo, firstNameError, lastNameError, emailError, passwordError} = this.state
    const {firstName, lastName, email, password} = signupInfo
    if (!firstName || firstName === ''){
      this.setState({firstNameError: true})
    }
    if (!lastName || lastName === '') {
      this.setState({lastNameError: true})
    }
    if (!email || email === '') {
      this.setState({emailError: true})
    }
    if (!password || password === '') {
      this.setState({passwordError: true})
    }
    if (firstName !== '' && lastName !== '' && email !== '' && password !== '' ){
      this.setState({firstNameError: false, lastNameError: false, emailError: false, passwordError: false})
      this.props.signup(signupInfo)
    }
  }
  render () {
    const style = {
      position: 'absolute',
      width: '300px',
      height: '200px',
      zIndex: '15',
      top: '35%',
      left: '50%',
      margin: '-100px 0 0 -150px',
      textAlign: 'center'
    }
    return (
      <div style={style}>
        <span><b><font size='16'>Kejeje</font></b></span>
        <div class='ui divider'></div>
        <Form>
          <Form.Field>
            <Form.Input required={true} id='firstName' placeholder='First name' type='text' onChange={this.onChange} error={this.state.firstNameError}/>
          </Form.Field>
          <Form.Field>
            <Form.Input required={true} id='lastName' placeholder='Last name' type='text' onChange={this.onChange} error={this.state.lastNameError}/>
          </Form.Field>
          <Form.Field>
            <Form.Input required={true} id='email' placeholder='E-mail address' type='text' onChange={this.onChange} error={this.state.emailError}/>
          </Form.Field>
          <Form.Field>
            <Form.Input required={true} id='password' placeholder='***********' type='password' onChange={this.onChange} error={this.state.passwordError}/>
          </Form.Field>
          <Form.Field>
            <select id='location' class='ui dropdown' onChange={this.onChange}>
              <option value='Montreal-Quebec'>Montreal - Quebec</option>
              <option value='Vancouver-British Columbia'>Vancouver - British Columbia</option>
              <option value='Ottawa-Ontario'>Ottawa - Ontario</option>
              <option value='Winnipeg-Manitoba'>Winnipeg - Manitoba</option>
            </select>
          </Form.Field>
          <Form.Field>
            <select id='userType' class='ui dropdown' onChange={this.onChange}>
              <option value='Owner'> Owner</option>
              <option value='Business'> Business</option>
            </select>
          </Form.Field>
          <Button.Group>
            <Button negative onClick={this.props.navigateToLoginPage}>Back</Button>
            <Button.Or />
            <Button positive onClick={this.onSave}>Signup</Button>
          </Button.Group>
        </Form>
      </div>
    )
  }
}

export { Signup }
