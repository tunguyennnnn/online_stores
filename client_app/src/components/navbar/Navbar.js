import React from 'react'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'
import UserSettings from '../userSettings/UserSettings'

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
    key: 'A',
    value: 'All',
    text: 'All'
  },
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
  constructor () {
    super()
    this.state = {subCategory: ''}
  }
  onClickHanlder (event, {name, value}, data) {
    const {type, category, subCategory} = event

    if (type === 'CATEGORY') {
      this.setState({subCategory: subCategory})
      this.props.filterItems({type, category, subCategory})
    } else {
      const province = data.value.split('-')[1]
      this.props.filterItems({type, province, category: this.props.category, subCategory: this.state.subCategory})
    }
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
        onChange={this.onClickHanlder.bind(this, {type: 'PROVINCE'})}
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
          onClick={this.onClickHanlder.bind(this, {type: 'CATEGORY', category: this.props.category})}
        />
        {
          myCategory.first().subCategories.map((subCategory, i) => {
            return <Menu.Item key={i} name={subCategory} onClick={this.onClickHanlder.bind(this, {type: 'CATEGORY', category: this.props.category, subCategory})} />
          })}
        {this.location()}
        <UserSettings
          userId={this.props.userId}
          email={this.props.userEmail}
          navigateToPersonalPage={this.props.navigateToPersonalPage.bind(null, this.props.userId)}
          logout={this.props.logout}
        />
      </Menu>
    )
  }
  render () {
    const {userEmail, navigateToHomePage, showSubcategory, userId} = this.props
    if (!showSubcategory) {
      return (
        <Menu fluid>
          <Menu.Item header onClick={navigateToHomePage.bind(null)}> Home</Menu.Item>
          <Menu.Item
            name='Buy and Sell'
            onClick={this.onClickHanlder.bind(this, {type: 'CATEGORY', category: 'BUY_AND_SELL'})}
          />
          <Menu.Item
            name='Rent'
            onClick={this.onClickHanlder.bind(this, {type: 'CATEGORY', category: 'RENT'})}
          />
          <Menu.Item
            name='Services'
            onClick={this.onClickHanlder.bind(this, {type: 'CATEGORY', category: 'SERVICES'})}
          />
          <Menu.Item
            name='Jobs'
            onClick={this.onClickHanlder.bind(this, {type: 'CATEGORY', category: 'JOBS'})}
          />
          {this.location()}
          <UserSettings
            userId={userId}
            email={userEmail}
            navigateToPersonalPage={this.props.navigateToPersonalPage.bind(null)}
            logout={this.props.logout}
          />
        </Menu>
      )
    } else {
      return (
        this.mySubCategory(this)
      )
    }
  }
}
