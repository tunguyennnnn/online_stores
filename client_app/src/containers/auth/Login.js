import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {login} from '../../actions/auth-actions'
import * as NavigationActions from '../../actions/navigation-actions'
import { Form, Input, Grid, Divider, Segment } from 'semantic-ui-react'

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
    const styleButton = {position: 'absolute'}
    return (
      <div style={style}>
        <span><b><font size='16'>Online Store</font></b></span>
        <Divider horizontal/>
          <Form>
            <Form.Field>
              <Input type='email' placeholder='E-mail address'  onChange={this.onChange} />
            </Form.Field>
            <Form.Field>
              <Input type='password' placeholder='************' onChange={this.onChange} />
            </Form.Field>
            <div style={styleButton}>
              <Grid columns={2}>
                <Grid.Column>
                  <Form.Button onClick={this.onSave}>Login</Form.Button>
                </Grid.Column>
                  <Divider vertical >OR</Divider>
                <Grid.Column>
                  <Form.Button onClick={this.props.navigateToSignupPage}>Register</Form.Button>
                </Grid.Column>
              </Grid>
            </div>
          </Form>
      </div>
    )
  }
}


export { Login }
