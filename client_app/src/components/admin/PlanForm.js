import React from 'react'
import {Form, Input, Button} from 'semantic-ui-react'

export default class PlanForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        planName: '',
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
    const {submitPlan, showItems} = this.props
    const {planName, price, duration} = this.state
    const gStyle = {width: '100%'}
    return (
      <div class='col s12'>
        <Form.Field class='col s12'>
          <div class='col s12'>
            <label>Name</label>
            <br />
            <Input style={gStyle} id='planName' type='text' value={planName} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Price</label>
            <br />
            <Input style={gStyle} id='price' type='text' value={price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Duration</label>
            <br />
            <Input style={gStyle} id='duration' type='text' value={duration} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <Button onClick={submitPlan.bind(null, this.state.formInput)}>Add Plan</Button>
            <Button onClick={showItems}>Cancel</Button>
          </div>
        </Form.Field>
      </div>
    )
  }
}
