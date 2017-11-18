import React from 'react'
import {Form, Input, TextArea, Select, Button} from 'semantic-ui-react'

export default class NewRentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        title: '',
        imageUrl: '',
        description: '',
        price: '',
        address: '',
        phone: '',
        category: 'Renting'
      }
    }
  }

  onChange (event) {
    const {id, value} = event.target
    const {formInput} = this.state
    console.log(formInput)
    formInput[id] = value
    return this.setState({formInput})
  }

  render () {
    const {itemId, title, imageUrl, description, price} = this.props.postInfo || {}
    const gStyle = {width: '100%'}
    return (
      <div class='col s12'>
        <Form.Field class='col s12'>
          <div class='col s12'>
            <label>Title</label>
            <br />
            <Input style={gStyle} id='title' type='text' value={title} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Image Url</label>
            <br />
            <Input style={gStyle} id='imageUrl' type='text' value={imageUrl} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Description</label>
            <br />
            <TextArea style={gStyle} id='description' value={description} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Price</label>
            <br />
            <Input style={gStyle} id='price' type='text' value={price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Address</label>
            <br />
            <Input style={gStyle} id='address' type='text' value={price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Phone Number</label>
            <br />
            <Input style={gStyle} id='phone' type='text' value={price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <Button onClick={this.props.submitPost.bind(null, this.state.formInput)}>Post</Button>
            <Button onClick={this.props.cancelPost}>Cancel</Button>
          </div>
        </Form.Field>
      </div>
    )
  }
}
