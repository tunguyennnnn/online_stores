import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {signup} from '../../actions/auth-actions'
import { Form } from 'semantic-ui-react'

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
      <Form style={style}>
        <Form.Field>
          <Form.Input placeholder='Firstname' type='text' onChange={this.onChange} />
          <Form.Input placeholder='Lastname' type='text' onChange={this.onChange} />
          <Form.Input placeholder='E-mail address' type='text' onChange={this.onChange} />
          <Form.Input placeholder='***********' type='password' onChange={this.onChange} />
          <Form.Button onClick={this.onSave}>Signup</Form.Button>
        </Form.Field>
      </Form>
    )
  }
}

export { Signup }
