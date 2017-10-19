import React from 'react'

export default class Header extends React.Component {
  render () {
    const {userEmail, navigateToPersonalPage} = this.props
    return (
      <nav>
        <div class='nav-wrapper'>
          <a href='#!' class='brand-logo'>Logo</a>
          <ul class='right hide-on-med-and-down'>
            <li><a onClick={navigateToPersonalPage.bind(null)}>{userEmail}</a></li>
            <li><a>Helper</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
