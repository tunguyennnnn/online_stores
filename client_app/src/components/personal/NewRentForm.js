import React from 'react'
import {Form, Input, TextArea, Select, Button, Message} from 'semantic-ui-react'
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
        province: PROVINCE.first().value.split('-')[1],
        city: PROVINCE.first().value.split('-')[0],
        type: 'Physical ad',
        adType: 'Sell',
        store: 'SL-1-123 Marketplace, Montreal, QC',
        timeSlot: '10:00-12:00'
      },
      rentError: {
        titleError: false,
        imageERror: false,
        descriptionError: false,
        phoneError: false,
        priceError: false
      }
    }
  }

  componentDidMount () {
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
    return this.setState({formInput})
  }

  onSave (event) {
    event.preventDefault()
    let titleError, imageError, descriptionError, phoneError, priceError
    const {title, imageUrl, description, phone, price} = this.state.formInput

    titleError = (!title || title === '') ? true : false
    imageError = (!imageUrl || imageUrl === '') ? true : false
    descriptionError = (!description || description === '') ? true : false
    phoneError = (!phone || phone === '') ? true : false
    priceError = (!price || price === '') ? true : false


    if (titleError || imageError || descriptionError || phoneError || priceError) {
      return this.setState({
        rentError: {
          titleError: titleError,
          imageError: imageError,
          descriptionError: descriptionError,
          phoneError: phoneError,
          priceError: priceError
        }
      })
    } else {
      this.setState({
        rentError: {
          titleError: false,
          imageError: false,
          descriptionError: false,
          phoneError: false,
          priceError: false
        }
      })
      this.props.submitPost(this.state.formInput)
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
    const {stores} = this.props
    const gStyle = {marginLeft: '5%', marginRight: '15%', marginBottom: '3%'}
    const inputStyle = {width: '100%'}
    const {category, subCategory, city, province, store, timeSlot} = this.state.formInput
    const selectedStore = store
    const selectedCategory = [category, subCategory].join('-')
    const selectedLocation = [city, province].join('-')
    return (
      <Form style={gStyle}>
        <Form.Field>
          <label>Title</label>
          <br />
          <Form.Input style={inputStyle} id='title' type='text' value={this.state.formInput.title} onChange={this.onChange.bind(this)} error={this.state.rentError.titleError} />
          {this.errorHandler(this.state.rentError.titleError)}
        </Form.Field>
        <Form.Field>
          <label>Image Url</label>
          <br />
          <Form.Input style={inputStyle} id='imageUrl' type='text' value={this.state.formInput.imageUrl} onChange={this.onChange.bind(this)} error={this.state.rentError.imageError} />
          {this.errorHandler(this.state.rentError.imageError)}
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <br />
          <Form.Input style={inputStyle} type='text' id='description' value={this.state.formInput.description} onChange={this.onChange.bind(this)} error={this.state.rentError.descriptionError} />
          {this.errorHandler(this.state.rentError.descriptionError)}
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <br />
          <Form.Input style={inputStyle} id='price' type='number' min='1' value={this.state.formInput.price} onChange={this.onChange.bind(this)} error={this.state.rentError.priceError} />
          {this.errorHandler(this.state.rentError.priceError)}
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <br />
          <Form.Input style={inputStyle} id='phone' type='text' value={this.state.formInput.phone} onChange={this.onChange.bind(this)} error={this.state.rentError.phoneError} />
          {this.errorHandler(this.state.rentError.phoneError)}
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <br />
          <select id='category' class='ui dropdown' onChange={this.onChange.bind(this)} defaultValue={selectedCategory}>
            {
              CATEGORY.map((category, i) => {
                // if (category.value === selectedCategory) {
                //   return <option key={i} value={category.value} selected>{category.text}</option>
                // }
                return <option key={i} value={category.value}>{category.text}</option>
              })
          }
          </select>
        </Form.Field>
        <Form.Field>
          <label>Province - City </label>
          <br />
          <select id='province' class='ui dropdown' onChange={this.onChange.bind(this)} defaultValue={selectedLocation}>
            {
              PROVINCE.map((province, i) => {
                // if (province.value === selectedLocation) {
                //   return <option key={i} value={province.value} selected>{province.text}</option>
                // }
                return <option key={i} value={province.value}>{province.text}</option>
              })
            }
          </select>
        </Form.Field>
        <Form.Field>
          <label>Choose a strategic location</label>
          <br />
          <select id='store' class='ui dropdown' onChange={this.onChange.bind(this)} defaultValue={selectedStore}>
            {
              stores.map((store, i) => {
                const concatstrategicLocation = `${store.strategicLocation}-${store.address}`
                // if (selectedStore === concatstrategicLocation) {
                //   return <option key={i} value={concatstrategicLocation} selected>{concatstrategicLocation}</option>
                // }
                return <option key={i} value={concatstrategicLocation}>{concatstrategicLocation}</option>
              })
            }
          </select>
        </Form.Field>
        <Form.Field>
          <label>Time slot</label>
          <br />
          <select id='timeSlot' class='ui dropdown' onChange={this.onChange.bind(this)} defaultValue={timeSlot}>
            {
              TIMES.map((time, i) => {
                // if (time.value === timeSlot) {
                //   return <option key={i} value={time.value} selected>{time.text}</option>
                // }
                return <option key={i} value={time.value}>{time.text}</option>
              })
            }
          </select>
        </Form.Field>
        <br />
        <Button.Group style={{width: '100%'}}>
          <Button style={{marginRight: '1%'}} onClick={this.onSave.bind(this)}>Post</Button>
          <Button onClick={this.props.cancelPost}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}
