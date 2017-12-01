import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {login} from '../../actions/auth-actions'
import * as NavigationActions from '../../actions/navigation-actions'
import {Message, Grid, Input, Form, Button, Divider} from 'semantic-ui-react'
import {handleMessage, handleMessageUpdate} from '../../utils/messageHandling'
import {updateMessage} from '../../actions/personalPageAction'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    ...NavigationActions,
    updateMessage
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {credentials: {email: '', password: ''}, emailError: false, passwordError: false}
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
    const {email, password} = this.state.credentials
    const {emailError, passwordError, errorMessage } = this.state
    console.log(email. password)
    if ( !email || email === '' ) {
      this.setState({emailError: true})
    }
    if (!password || password === '') {
      this.setState({passwordError: true})
    }
    if (email !== '' && password !== '')
    {
      this.setState({emailError: false, passwordError: false})
      this.props.login(this.state.credentials)
    }
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
        <span><b><font size='16'>Kejeje</font></b></span>
        <Divider />
        <Form>
          <Form.Field>
            <Form.Input required={true} type='email' placeholder='E-mail Address' onChange={this.onChange} error={this.state.emailError}/>
          </Form.Field>
          <Form.Field>
            <Form.Input required={true} type='password' placeholder='************' onChange={this.onChange} error={this.state.passwordError}/>
          </Form.Field>
          <Grid centered>
            <Grid.Row>
              {handleMessage(this.props.auth.error, '')}
              {handleMessageUpdate(this.props.auth.error, '', this.props.updateMessage)}
            </Grid.Row>
          </Grid>
          <Button.Group>
            <Button primary onClick={this.onSave}>Login</Button>
            <Button.Or />
            <Button positive onClick={this.props.navigateToSignupPage}>Register</Button>
          </Button.Group>
        </Form>
      </div>
    )
  }
}


export { Login }
