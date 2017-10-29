import React from 'react'

export default class Navbar extends React.Component {
  render () {
    const {userEmail, navigateToPersonalPage} = this.props
    return (
      <div>
        <a data-beloworigin='true' class='dropdown-button btn'
          href='#' data-activates='BuySell'> Buy & Sell </a>
        <a data-beloworigin='true' class='dropdown-button btn'
          href='#' data-activates='Rent'> Rent </a>
        <a data-beloworigin='true' class='dropdown-button btn'
          href='#' data-activates='Services'> Services </a>
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
        <ul class='right hide-on-med-and-down'>
          <li><a onClick={navigateToPersonalPage.bind(null)}>{userEmail}</a></li>
        </ul>
      </div>
    )
  }
}
