import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class Navbar extends React.Component {
  render () {
    const {userEmail, navigateToHomePage, navigateToPersonalPage} = this.props
    return (
      <Menu>
        <Menu.Item header onClick={navigateToHomePage.bind(null)}> Online Store</Menu.Item>
        <Menu.Item onClick={navigateToPersonalPage.bind(null)} position='right'>
          {userEmail}
        </Menu.Item>
      </Menu>

      // <Dropdown text='Buy&Sell' simple item>
      //   <Dropdown.Menu>
      //     <Dropdown.Item>Clothing</Dropdown.Item>
      //     <Dropdown.Item>Books</Dropdown.Item>
      //     <Dropdown.Item>Electronics</Dropdown.Item>
      //     <Dropdown.Item>Musical Instruments</Dropdown.Item>
      //   </Dropdown.Menu>
      // </Dropdown>
      // <Dropdown text='Services' simple item>
      //   <Dropdown.Menu>
      //     <Dropdown.Item>Tutors</Dropdown.Item>
      //     <Dropdown.Item>Event Planners</Dropdown.Item>
      //     <Dropdown.Item>Photographers</Dropdown.Item>
      //     <Dropdown.Item>Personal trainers</Dropdown.Item>
      //   </Dropdown.Menu>
      // </Dropdown>
      // <Dropdown text='Rent' simple item>
      //   <Dropdown.Menu>
      //     <Dropdown.Item>Electronics</Dropdown.Item>
      //     <Dropdown.Item>Car</Dropdown.Item>
      //     <Dropdown.Item>Apartments</Dropdown.Item>
      //     <Dropdown.Item>Wedding - dresses</Dropdown.Item>
      //   </Dropdown.Menu>
      // </Dropdown>
      // <Dropdown text='Jobs' simple item>
      //   <Dropdown.Menu>
      //     <Dropdown.Item>Accounting & Management</Dropdown.Item>
      //     <Dropdown.Item>Bar, Food & Hospitality</Dropdown.Item>
      //     <Dropdown.Item>Healthcare</Dropdown.Item>
      //     <Dropdown.Item>Programmers & Computer</Dropdown.Item>
      //   </Dropdown.Menu>
      // </Dropdown>
      // <Menu.Item onClick={navigateToPersonalPage.bind(null)} position='right'>
      //   {userEmail}
      // </Menu.Item>
    )
  }
}
