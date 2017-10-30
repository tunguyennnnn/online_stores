import React from 'react'

export default class Navbar extends React.Component {
  render () {
    const {userEmail, navigateToPersonalPage} = this.props
    return (
      <div>
        <ul id='BuySell' class='dropdown-content'>
          <li><a href=''>Clothing</a></li>
          <li><a href=''>Books</a></li>
          <li><a href=''>Electronics</a></li>
          <li><a href=''>Cars</a></li>
        </ul>
        <ul id='Rent' class='dropdown-content'>
          <li><a href=''>Clothing</a></li>
          <li><a href=''>Books</a></li>
          <li><a href=''>Electronics</a></li>
          <li><a href=''>Cars</a></li>
        </ul>
        <ul id='Services' class='dropdown-content'>
          <li><a href=''>Clothing</a></li>
          <li><a href=''>Books</a></li>
          <li><a href=''>Electronics</a></li>
          <li><a href=''>Cars</a></li>
        </ul>
        <nav>
          <div class='nav-wrapper'>
            <ul>
              <li><a data-hover='true' data-beloworigin='true' class='dropdown-button'
                href='#' data-activates='BuySell'> Buy & Sell </a></li>
              <li><a data-hover='true' data-beloworigin='true' class='dropdown-button'
                href='#' data-activates='Rent'> Rent </a></li>
              <li><a data-hover='true' data-beloworigin='true' class='dropdown-button'
                href='#' data-activates='Services'> Services </a></li>
              <li><a onClick={navigateToPersonalPage.bind(null)}>{userEmail}</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
