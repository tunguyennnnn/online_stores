import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Categories from '../categories/Categories'

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
export default class Navbar extends React.Component {
  onClickHanlder ({category, subCategory}) {
    console.log(category)
    this.props.filterItems({type: 'CATEGORY', category, subCategory})
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
        <Menu.Item onClick={this.props.navigateToPersonalPage.bind(null)} position='right'>
          {this.props.userEmail}
          <Icon disabled name='setting' />
        </Menu.Item>
      </Menu>
    )
  }
  render () {
    const {userEmail, navigateToHomePage, navigateToPersonalPage, showSubcategory} = this.props
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
