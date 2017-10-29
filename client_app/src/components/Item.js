import React from 'react'

export default class Item extends React.Component {
  render () {
    const {imageUrl, title, description} = this.props.itemInfo
    console.log(imageUrl, title, description)
    return (
      <div class='row col s12 m4 l4'>
        <div class='col s12'>
          <div class='card'>
            <div class='card-image'>
              <img src={imageUrl}></img>
              <span class='card-title'>{title}</span>
            </div>
            <div class='card-content'>
              <p>{description}</p>
            </div>
            <div class='card-action'>
              <a href='#'>More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
