import React from 'react'
import {Form, Input, Button} from 'semantic-ui-react'

export default class AccountForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
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
    const gStyle = {width: '100%'}
    return (
      <div class='col s12'>
        <Form.Field class='col s12'>
          <div class='col s12'>
            <label>Email</label>
            <br />
            <Input style={gStyle} id='email' type='text' value={email} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>First Name</label>
            <br />
            <Input style={gStyle} id='firstName' type='text' value={firstName} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Last Name</label>
            <br />
            <Input style={gStyle} id='lastName' type='text' value={lastName} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Password</label>
            <br />
            <Input style={gStyle} id='password' type='password' value={password} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <Button onClick={submitAccount.bind(null, this.state.formInput)}>Add Account</Button>
            <Button onClick={showItems}>Cancel</Button>
          </div>
        </Form.Field>
      </div>
    )
  }
}
