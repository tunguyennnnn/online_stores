import React from 'react'

export default class Header extends React.Component {
  render () {
    const {userEmail, navigateToPersonalPage} = this.props
    return (
      <div>
        <nav>
          <div class='nav-wrapper'>
            <ul class='left hide-on-med-and-down'>
              <li><a>Buy&Sell</a></li>
              <li><a>Rent</a></li>
              <li><a>Services</a></li>
              <li><a>Others</a></li>
            </ul>
            <a href='#!' class='brand-logo'>Logo</a>
            <ul class='right hide-on-med-and-down'>
              <li><a onClick={navigateToPersonalPage.bind(null)}>{userEmail}</a></li>
              <li><a>Helper</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
