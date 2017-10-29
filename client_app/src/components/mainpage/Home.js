import React from 'react'

export default class Home extends React.Component {

    render () {
    const {data} = this.props
    // I think the problem is data-activates
    // It returns the following error: Uncaught Error: Syntax error, unrecognized expression: #Buy1&Sell
    const categories = data.map((categories, i) => (
      <a  key={i} class='dropdown-button btn'
          href='#' data-activates={categories.category}>
          Click Me
      </a>
    ))

    const listItems = data.map((categories, i) => (
      <ul id={categories.category} class='dropdown-content' key={i}>
      {
        categories.subCategories.map((subCategories, j) => (
          <li key={j}>
            <a href="">{subCategories}</a>
          </li>
        ))
      }
      </ul>
    ))

      return (
        <div>
          {categories}
          {listItems}
      </div>
      )
    }
  }
