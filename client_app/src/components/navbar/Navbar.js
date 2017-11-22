import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Categories from '../categories/Categories'

export default class Navbar extends React.Component {
  render () {
    const {userEmail, navigateToHomePage, navigateToPersonalPage, showSubcategory, category, filterItems} = this.props
    console.log(this.props)
    return (
      <Menu fluid>
        <Menu.Item header onClick={navigateToHomePage.bind(null)}> Home</Menu.Item>
        <Categories showSubcategory={showSubcategory} navigateToHomePage={navigateToHomePage} category={category} filterItems={filterItems}/>
        <Menu.Item onClick={navigateToPersonalPage.bind(null)} position='right'>
          {userEmail}
          <Icon disabled name='setting' />
        </Menu.Item>
      </Menu>
    )
  }
}
