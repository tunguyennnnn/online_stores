import React from 'react'
import {Form, Input, TextArea, Select, Button} from 'semantic-ui-react'
const CATEGORY = [
  {key: 'buyandsell.clothing', value: 'BUY_AND_SELL-Clothing', text: 'Buy and Sell - Clothing'},
  {key: 'buyandsell.books', value: 'BUY_AND_SELL-Books', text: 'Buy and Sell - Books'},
  {key: 'buyandsell.electronics', value: 'BUY_AND_SELL-Electronics', text: 'Buy and Sell - Electronics'},
  {key: 'buyandsell.electronics', value: 'BUY_AND_SELL-Musical Instruments', text: 'Buy and Sell - Musical Instruments'}
]

const PROVINCE = [
  {
    key: 'MQ',
    value: 'Montreal-Quebec',
    text: 'Montreal - Quebec'
  },
  {
    key: 'VBC',
    value: 'Vancouver-British Columbia',
    text: 'Vancouver - British Columbia'
  },
  {
    key: 'OO',
    value: 'Ottawa-Ontario',
    text: 'Ottawa - Ontario'
  },
  {
    key: 'WM',
    value: 'Winnipeg-Manitoba',
    text: 'Winnipeg - Manitoba'
  }
]

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
        city: PROVINCE.first().value.split('-')[1]
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
    const {itemId, title, imageUrl, description, price, category} = this.props.postInfo || {}
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
            <label>Category</label>
            <br />
            <select id='category' class='ui dropdown' onChange={this.onChange.bind(this)}>
              {
                CATEGORY.map((category, i) => <option key={i} value={category.value}>{category.text}</option>)
              }
            </select>
            <select id='province' class='ui dropdown' onChange={this.onChange.bind(this)}>
            {
              PROVINCE.map((province, i) => <option key={i} value={province.value}>{province.text}</option>)
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
