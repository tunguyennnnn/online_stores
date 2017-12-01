import React from 'react'
import {Form, Input, Button} from 'semantic-ui-react'

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
      }
    }
  }

  onChange (event) {
    const {id, value} = event.target
    const {formInput} = this.state
    formInput[id] = value
    return this.setState({formInput})
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
          <Form.Input style={inputStyle} id='email' type='text' value={email} onChange={this.onChange.bind(this)} />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <br />
          <Form.Input style={inputStyle} id='firstName' type='text' value={firstName} onChange={this.onChange.bind(this)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <br />
          <Form.Input style={inputStyle} id='lastName' type='text' value={lastName} onChange={this.onChange.bind(this)} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <br />
          <Form.Input style={inputStyle} id='password' type='password' value={password} onChange={this.onChange.bind(this)} />
        </Form.Field>
        <Button.Group style={{width: '100%'}}>
          <Button style={buttonStyle} onClick={submitAccount.bind(null, this.state.formInput)}>Add Account</Button>
          <Button onClick={showItems}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}
