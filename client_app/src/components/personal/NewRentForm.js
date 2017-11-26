import React from 'react'
import {Form, Input, TextArea, Select, Button} from 'semantic-ui-react'
import { CATEGORY, PROVINCE, TIMES } from '../../../constants'

export default class NewRentForm extends React.Component {
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
        type: 'Physical ad',
        adType: 'Sell',
        store: 'SL-1-123 Marketplace, Montreal, QC',
        timeSlot: '10:00-12:00'
      }
    }
  }

  onChange (event) {
    const {id, value} = event.target
    const {formInput} = this.state
    if (id === 'category') {
      formInput.category = value.split('-')[0]
      formInput.subCategory = value.split('-')[1]
    } else if (id === 'province') {
      formInput.province = value.split('-')[0]
      formInput.city = value.split('-')[1]
    } else {
      formInput[id] = value
    }
    console.log(formInput)
    return this.setState({formInput})
  }

  render () {
    const {title, imageUrl, description, price} = this.props.postInfo || {}
    const {stores} = this.props
    const strategicLocation = `{stores.}`
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
            <label>Description Url</label>
            <br />
            <TextArea style={gStyle} id='description' value={description} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Price</label>
            <br />
            <Input style={gStyle} id='price' type='text' value={price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Phone Number</label>
            <br />
            <Input style={gStyle} id='phone' type='text' value={price} onChange={this.onChange.bind(this)} />
          </div>
          <div>
            <label>Choose your Category</label>
            <br />
            <select id='category' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                CATEGORY.map((category, i) => <option key={i} value={category.value}>{category.text}</option>)
              }
            </select>
            <label>Address</label>
            <br />
            <select id='province' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                PROVINCE.map((province, i) => <option key={i} value={province.value}>{province.text}</option>)
              }
            </select>
            <label>Choose a strategic location</label>
            <br />
            <select id='store' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                stores.map((store, i) => {
                  const concatstrategicLocation = `${store.strategicLocation}-${store.address}`
                  return <option key={i} value={concatstrategicLocation}>{concatstrategicLocation}</option>
                }
                )
              }
            </select>
            <label>Time slot</label>
            <select id='timeSlot' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                TIMES.map((time, i) => <option key={i} value={time.value}>{time.text}</option>)
              }
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
