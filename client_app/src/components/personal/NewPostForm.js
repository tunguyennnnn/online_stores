import React from 'react'
import {Form, Input, TextArea, Select} from 'semantic-ui-react'

const CATEGORY = [
  {key: 'Vehicle.Car', value: 'Vehicles - Car', text: 'Vehicles - Car'},
  {key: 'Vehicle.Bike', value: 'Vehicles - Bike', text: 'Vehicles - Bike'},
  {key: 'Others', value: 'Others', text: 'Others'}
]

export default class NewPostForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        title: '',
        imageUrl: '',
        description: '',
        price: '',
        category: 'Others'
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
    return (
      <div>
        <Form.Field>
          <label>Title</label>
          <Input id='title' type='text' onChange={this.onChange.bind(this)} />
          <label>Image Url</label>
          <Input id='imageUrl' type='text' onChange={this.onChange.bind(this)} />
          <label>Description Url</label>
          <TextArea id='description' onChange={this.onChange.bind(this)} />
          <label>Price</label>
          <Input id='price' type='text' onChange={this.onChange.bind(this)} />
          <Select id='category' placeholder='Select Category' options={CATEGORY} onChange={this.onChange.bind(this)} />
          <button class='btn waves-effect waves-light' onClick={this.props.submitPost.bind(null, this.state.formInput)}>Post</button>
          <button class='btn' onClick={this.props.cancelPost}>Cancel</button>
        </Form.Field>
      </div>
    )
  }
}
