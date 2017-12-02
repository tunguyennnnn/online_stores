import React from 'react'
import {Form, Button, Header, Message} from 'semantic-ui-react'

export default class PromotionForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        price: '',
        duration: ''
      },
      promotionError: {
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
    let priceError, durationError
    const {price, duration} = this.state.formInput

    priceError = (!price || price === '') ? true : false
    durationError = (!duration || duration === '') ? true : false

    if (priceError || durationError) {
      return this.setState({
        promotionError: {
          priceError: priceError,
          durationError: durationError
        }
      })
    } else {
      this.setState({
        promotionError: {
          priceError: false,
          durationError: false
        }
      })
      this.props.submitPromotion(this.state.formInput)
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
    const {submitPromotion, showItems} = this.props
    const {price, duration} = this.state
    const gStyle = {marginLeft: '5%', marginRight: '15%', marginBottom: '3%'}
    const inputStyle = {width: '100%'}
    const buttonStyle = {marginRight: '1%', border: 'none'}
    return (
      <Form style={gStyle}>
        <Header as='h1'>Add new promotion</Header>
        <Form.Field>
          <label>Price</label>
          <br />
          <Form.Input style={inputStyle} id='price' type='text' value={price} onChange={this.onChange.bind(this)} error={this.state.promotionError.priceError} />
          {this.errorHandler(this.state.promotionError.priceError)}
        </Form.Field>
        <Form.Field>
          <label>Duration</label>
          <br />
          <Form.Input style={inputStyle} id='duration' type='text' value={duration} onChange={this.onChange.bind(this)} error={this.state.promotionError.durationError} />
          {this.errorHandler(this.state.promotionError.durationError)}
        </Form.Field>
        <Button.Group style={{width: '100%'}}>
          <Button style={buttonStyle} onClick={this.onSave.bind(this)}>Add Plan</Button>
          <Button onClick={showItems}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}
