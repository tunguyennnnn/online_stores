import React from 'react'

export default class Item extends React.Component {
  render () {
    const {belongToCurrentUser, ownerName, editPost} = this.props
    const {imageUrl, title, description, price, postDate, completed} = this.props.itemInfo
    return (
      <div class='row col s12 m4 l4'>
        <div class='col s12'>
          <div class='card'>
            <div class='card-image'>
              <img src={imageUrl}></img>
              <span class='card-title'>{title}</span>
            </div>
            <div class='card-content'>
              <span style={{color: '#78909c'}}>Price: {`${price} CAD`}</span>
              <br />
              <span style={{color: '#78909c'}}>{`Post Date: ${postDate}`}</span>
              <br />
              <p><label>Description: </label>{description}</p>
            </div>
            <div class='card-action'>
              <span>Status: </span><span>{completed ? 'Sold' : 'Available'}</span>
              <br />
              <a href='#'>More</a>
              {
                belongToCurrentUser
                  ? completed ? null : <a href='#' onClick={editPost.bind(null, this.props.itemInfo)}>Edit</a>
                  : <a href='#'>{ownerName}</a>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
