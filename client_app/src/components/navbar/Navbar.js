import React from 'react'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'

const myCategories = {
  categories: [
    {
      category: 'BUY_AND_SELL',
      subCategories: ['Clothing', 'Books', 'Electronics', 'Musical Instruments']
    },
    {
      category: 'SERVICES',
      subCategories: ['Tutors', 'Event Planners', 'Photographers', 'Personal trainers']
    },
    {
      category: 'RENT',
      subCategories: ['Electronics', 'Car', 'Apartments', 'Wedding - dresses']
    },
    {
      category: 'JOBS',
      subCategories: ['Accounting & Management', 'Bar, Food & Hospitality', 'Healthcare', 'Programmers & Computer']
    }
  ]
}

const provinceOptions = [
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
export default class Navbar extends React.Component {
  onClickHanlder ({category, subCategory}) {
    console.log(category)
    this.props.filterItems({type: 'CATEGORY', category, subCategory})
  }
  onChangeHandler (event, data) {
    event.preventDefault()
    const province = data.value.split('-')[0]
    const city = data.value.split('-')[1]
    this.props.filterItems({type: 'PROVINCE', province, city})
  }

  getCategory (category) {
    switch (category) {
      case 'BUY_AND_SELL':
        return 'Buy and Sell'
      case 'RENT':
        return 'Rent'
      case 'SERVICES':
        return 'Services'
      case 'JOBS':
        return 'Jobs'
      default:
        return 'No Category Found'
    }
  }
  location () {
    return (
      <Dropdown
        onChange={this.onChangeHandler.bind(this)}
        placeholder='Select Province'
        fluid search selection
        options={provinceOptions}
      />
    )
  }
  mySubCategory () {
    const myCategory = myCategories.categories.filter((allCategories, i) => allCategories.category === this.props.category)

    return (
      <Menu fluid>
        <Menu.Item header onClick={this.props.navigateToHomePage.bind(null)}> Home</Menu.Item>
        <Menu.Item
          name={this.getCategory(this.props.category)}
          onClick={this.onClickHanlder.bind(this, {category: this.props.category})}
        />
        {
          myCategory.first().subCategories.map((subCategory, i) => {
            return <Menu.Item key={i} name={subCategory} onClick={this.onClickHanlder.bind(this, {category: this.props.category, subCategory})} />
          })}
        {this.location()}
        <Menu.Item onClick={this.props.navigateToPersonalPage.bind(null)} position='right'>
          {this.props.userEmail}
          <Icon disabled name='setting' />
        </Menu.Item>
      </Menu>
    )
  }
  render () {
    const {userEmail, navigateToHomePage, navigateToPersonalPage, showSubcategory, province} = this.props
    console.log(this.props)
    if (!showSubcategory) {
      return (
        <Menu fluid>
          <Menu.Item header onClick={navigateToHomePage.bind(null)}> Home</Menu.Item>
          <Menu.Item
            name='Buy and Sell'
            onClick={this.onClickHanlder.bind(this, {category: 'BUY_AND_SELL'})}
          />
          <Menu.Item
            name='Rent'
            onClick={this.onClickHanlder.bind(this, {category: 'RENT'})}
          />
          <Menu.Item
            name='Services'
            onClick={this.onClickHanlder.bind(this, {category: 'SERVICES'})}
          />
          <Menu.Item
            name='Jobs'
            onClick={this.onClickHanlder.bind(this, {category: 'JOBS'})} />
          {this.location()}
          <Menu.Item onClick={navigateToPersonalPage.bind(null)} position='right'>
            {userEmail}
            <Icon disabled name='setting' />
          </Menu.Item>
        </Menu>
      )
    } else {
      return (
        this.mySubCategory(this)
      )
    }
  }
}
