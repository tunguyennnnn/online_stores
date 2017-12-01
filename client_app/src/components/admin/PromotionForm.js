import React from 'react'
import {Form, Button, Header} from 'semantic-ui-react'

export default class PromotionForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        price: '',
        duration: ''
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
          <Form.Input style={inputStyle} id='price' type='text' value={price} onChange={this.onChange.bind(this)} />
        </Form.Field>
        <Form.Field>
          <label>Duration</label>
          <br />
          <Form.Input style={inputStyle} id='duration' type='text' value={duration} onChange={this.onChange.bind(this)} />
        </Form.Field>
        <Button.Group style={{width: '100%'}}>
          <Button style={buttonStyle} onClick={submitPromotion.bind(null, this.state.formInput)}>Add Plan</Button>
          <Button onClick={showItems}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}
