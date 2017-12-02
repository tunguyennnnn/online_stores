import React from 'react'
import {Form, Input, Button, Message} from 'semantic-ui-react'

export default class AccountForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        isAdmin: true,
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      accountError: {
        emailError: false,
        firstNameError: false,
        lastNameError: false,
        passwordError: false
      }
    }
  }

  onChange (event) {
    const {id, value} = event.target
    const {formInput} = this.state
    formInput[id] = value
    return this.setState({formInput})
  }

  onSave (event) {
    event.preventDefault()
    let emailError, firstNameError, lastNameError, passwordError
    const {email, firstName, lastName, password} = this.state.formInput

    emailError = (!email || email === '') ? true : false
    firstNameError = (!firstName || firstName === '') ? true : false
    lastNameError = (!lastName || lastName === '') ? true : false
    passwordError = (!password || password === '') ? true : false

    if (emailError || firstNameError || lastNameError || passwordError) {
      return this.setState({
        accountError: {
          emailError : emailError,
          firstNameError: firstNameError,
          lastNameError: lastNameError,
          passwordError: passwordError
        }
      })
    } else {
      this.setState({
       accountError: {
         emailError : false,
         firstNameError: false,
         lastNameError: false,
         passwordError: false
       }
     })
      this.props.submitAccount(this.state.formInput)
    }
  }

  errorHandler(flag) {
    if (flag) {
      return (
        <Message negative={true} visible={true}>Invalid Input! Check above input field!</Message>
      )
    } else {
      return null
    }
  }

  render () {
    const {submitAccount, showItems} = this.props
    const {email, firstName, lastName, password} = this.state
    const gStyle = {marginLeft: '5%', marginRight: '15%', marginBottom: '3%'}
    const inputStyle = {width: '100%'}
    const buttonStyle = {marginRight: '1%', border: 'none'}
    return (
      <Form style={gStyle}>
        <Form.Field>
          <label>Email</label>
          <br />
          <Form.Input style={inputStyle} id='email' type='text' value={email} onChange={this.onChange.bind(this)} error={this.state.accountError.emailError}/>
          {this.errorHandler(this.state.accountError.emailError)}
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <br />
          <Form.Input style={inputStyle} id='firstName' type='text' value={firstName} onChange={this.onChange.bind(this)} error={this.state.accountError.firstNameError} />
          {this.errorHandler(this.state.accountError.firstNameError)}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <br />
          <Form.Input style={inputStyle} id='lastName' type='text' value={lastName} onChange={this.onChange.bind(this)} error={this.state.accountError.lastNameError} />
          {this.errorHandler(this.state.accountError.lastNameError)}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <br />
          <Form.Input style={inputStyle} id='password' type='password' value={password} onChange={this.onChange.bind(this)} error={this.state.accountError.passwordError} />
          {this.errorHandler(this.state.accountError.passwordError)}
        </Form.Field>
        <Button.Group style={{width: '100%'}}>
          <Button style={buttonStyle} onClick={this.onSave.bind(this)}>Add Account</Button>
          <Button onClick={showItems}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}
