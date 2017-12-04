import React from 'react'
import {Form, Button, Header, Message} from 'semantic-ui-react'

export default class PlanForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        name: '',
        price: '',
        duration: ''
      },
      planError: {
        error: false,
        nameError: false,
        priceError: false,
        durationError: false
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
    let nameError, priceError, durationError
    const {name, price, duration} = this.state.formInput

    nameError = (!name || name === '') ? true : false
    priceError = (!price || price === '') ? true : false
    durationError = (!duration || duration.match(/^[0-9]*$/gm) === null || duration === '') ? true : false

    if (nameError || priceError || durationError) {
      return this.setState({
        planError: {
          nameError: nameError,
          priceError: priceError,
          durationError: durationError
        }
      })
    } else {
      this.setState({
        planError: {
          nameError: false,
          priceError: false,
          durationError: false
        }
      })
      this.props.submitPlan(this.state.formInput)
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
    const {submitPlan, showItems} = this.props
    const {planName, price, duration} = this.state
    const gStyle = {marginLeft: '5%', marginRight: '15%', marginBottom: '3%'}
    const inputStyle = {width: '100%'}
    const buttonStyle = {marginRight: '1%', border: 'none'}
    return (
      <Form style={gStyle}>
        <Header as='h1'> Add new plan</Header>
        <Form.Field>
          <label>Name</label>
          <br />
          <Form.Input style={inputStyle} id='name' type='text' value={planName} onChange={this.onChange.bind(this)} error={this.state.planError.nameError}/>
          {this.errorHandler(this.state.planError.nameError)}
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <br />
          <Form.Input style={inputStyle} id='price' type='number' value={price} onChange={this.onChange.bind(this)} error={this.state.planError.priceError}/>
          {this.errorHandler(this.state.planError.priceError)}
        </Form.Field>
        <Form.Field>
          <label>Duration</label>
          <br />
          <Form.Input style={inputStyle} id='duration' type='text' value={duration} onChange={this.onChange.bind(this)} error={this.state.planError.durationError} />
          {this.errorHandler(this.state.planError.durationError)}
        </Form.Field>
        <Button.Group style={{width: '100%'}}>
          <Button style={buttonStyle} onClick={this.onSave.bind(this)}>Add Plan</Button>
          <Button onClick={showItems}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}
