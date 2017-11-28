import React from 'react'
import {Form, Input, TextArea, Select, Button} from 'semantic-ui-react'
import { CATEGORY, PROVINCE, TIMES } from '../../../constants'

export default class NewRentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formInput: {
        id: null,
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

  componentDidMount () {
    console.log(this.props.postInfo)
    if (this.props.postInfo) {
      const {id, category, city, province, description, phone, price, subCategory, title, imageUrl, store, timeSlot} = this.props.postInfo
      this.setState({formInput: {id, description, phone, price, category, subCategory, title, city, province, imageUrl, store, timeSlot}})
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
    const {stores} = this.props
    const gStyle = {width: '100%'}
    const {category, subCategory, city, province, store, timeSlot} = this.state.formInput
    const selectedStore = store
    const selectedCategory = [category, subCategory].join('-')
    const selectedLocation = [city, province].join('-')
    return (
      <div class='col s12'>
        <Form.Field class='col s12'>
          <div class='col s12'>
            <label>Title</label>
            <br />
            <input style={gStyle} id='title' type='text' value={this.state.formInput.title} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Image Url</label>
            <br />
            <input style={gStyle} id='imageUrl' type='text' value={this.state.formInput.imageUrl} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Description Url</label>
            <br />
            <TextArea style={gStyle} id='description' value={this.state.formInput.description} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Price</label>
            <br />
            <input style={gStyle} id='price' type='text' value={this.state.formInput.price} onChange={this.onChange.bind(this)} />
          </div>
          <div class='col s12'>
            <label>Phone Number</label>
            <br />
            <input style={gStyle} id='phone' type='text' value={this.state.formInput.phone} onChange={this.onChange.bind(this)} />
          </div>
          <div>
            <label>Choose your Category</label>
            <br />
            <select id='category' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                CATEGORY.map((category, i) => {
                  if (category.value === selectedCategory) {
                    return <option key={i} value={category.value} selected>{category.text}</option>
                  }
                  return <option key={i} value={category.value}>{category.text}</option>
                })
              }
            </select>
            <label>Address</label>
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
            <label>Choose a strategic location</label>
            <br />
            <select id='store' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                stores.map((store, i) => {
                  const concatstrategicLocation = `${store.strategicLocation}-${store.address}`
                  if (selectedStore === concatstrategicLocation) {
                    return <option key={i} value={concatstrategicLocation} selected>{concatstrategicLocation}</option>
                  }
                  return <option key={i} value={concatstrategicLocation}>{concatstrategicLocation}</option>
                })
              }
            </select>
            <label>Time slot</label>
            <select id='timeSlot' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                TIMES.map((time, i) => {
                  if (time.value === timeSlot) {
                    return <option key={i} value={time.value} selected>{time.text}</option>
                  }
                  return <option key={i} value={time.value}>{time.text}</option>
                })
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
