import React from 'react'
import {Form, Input, TextArea, Select, Button} from 'semantic-ui-react'
import { CATEGORY, PROVINCE } from '../../../constants'

export default class NewPostForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        title: '',
        imageUrl: '',
        description: '',
        phone: '',
        price: '',
        category: CATEGORY.first().value.split('-')[0],
        subCategory: CATEGORY.first().value.split('-')[1],
        province: PROVINCE.first().value.split('-')[0],
        city: PROVINCE.first().value.split('-')[1],
        type: 'Online ad',
        adType: 'Sell'
      }
    }
  }

  componentDidMount () {
    console.log(this.props.postInfo)
    if (this.props.postInfo) {
      const {id, category, city, province, description, phone, price, subCategory, title, imageUrl} = this.props.postInfo
      this.setState({formInput: {id, description, phone, price, category, subCategory, title, city, province, imageUrl}})
    }
  }

  onChange (event) {
    const {id, value} = event.target
    const {formInput} = this.state
    if (id === 'category') {
      formInput.category = value.split('-')[0]
      formInput.subCategory = value.split('-')[1]
    } else if (id === 'province') {
      formInput.city = value.split('-')[0]
      formInput.province = value.split('-')[1]
    } else {
      formInput[id] = value
    }
    console.log(formInput)
    return this.setState({formInput})
  }

  render () {
    const gStyle = {width: '100%'}
    const isSellType = this.state.formInput === 'Sell'
    const {category, subCategory, city, province} = this.state.formInput
    const selectedCategory = [category, subCategory].join('-')
    const selectedLocation = [city, province].join('-')
    return (
      <div class='col s12'>
        <Form.Field class='col s12'>
          <div class='col s12'>
            <label>Title</label>
            <br />
            <Input style={gStyle} id='title' type='text' value={this.state.formInput.title} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Image Url</label>
            <br />
            <Input style={gStyle} id='imageUrl' type='text' value={this.state.formInput.imageUrl} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Description Url</label>
            <br />
            <TextArea style={gStyle} id='description' value={this.state.formInput.description} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Price</label>
            <br />
            <Input style={gStyle} id='price' type='number' min='1' value={this.state.formInput.price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Phone Number</label>
            <br />
            <Input style={gStyle} id='phone' type='text' value={this.state.formInput.phone} onChange={this.onChange.bind(this)} />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select id='category' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                CATEGORY.map((category, i) => {
                  console.log(category.value, selectedCategory)
                  if (category.value === selectedCategory) {
                    return <option key={i} value={category.value} selected>{category.text}</option>
                  }
                  return <option key={i} value={category.value}>{category.text}</option>
              })
              }
            </select>
            <label>Province - City </label>
            <br />
            <select id='province' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                PROVINCE.map((province, i) => {
                  if (province.value === selectedLocation) {
                    return <option key={i} value={province.value} selected>{province.text}</option>
                  }
                  return <option key={i} value={province.value}>{province.text}</option>
                })
              }
            </select>
            <select id='adType' class='ui dropdown' onChange={this.onChange.bind(this)}>
              <option value='Sell'> Sell </option>
              {isSellType ? <option value='Buy'> Buy </option> : <option value='Buy' selected> Buy </option>}
            </select>
          </div>
          <br />
          <div class='col s12'>
            <Button onClick={this.props.submitPost.bind(null, this.state.formInput)}>Post</Button>
            <Button onClick={this.props.cancelPost}>Cancel</Button>
          </div>
        </Form.Field>
      </div>
    )
  }
}
