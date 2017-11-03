import React from 'react'
import { Grid, Card, Image, Divider } from 'semantic-ui-react'

export default class Item extends React.Component {
  render () {
    const {belongToCurrentUser, ownerName, editPost} = this.props
    const {imageUrl, title, description, price, postDate, completed, address, phoneNumber, adType, forSaleBy} = this.props.itemInfo
    return (
      <div class='card'>
        <img class='ui large mini' src={imageUrl} />
        <div class='content'>
          <div class='header'>{title}</div>
          <div class='description'>{description}</div>
          <Divider horizontal />
          <div class='meta' style={{color: '#78909c'}}>Price: {`${price} CAD`}</div>
          <div class='meta' style={{color: '#78909c'}}>Address: {address} </div>
          <div class='meta' style={{color: '#78909c'}}>Phone number: {phoneNumber} </div>
        </div>
        <div class='content extra'>
          <div class='card-action'>
            <span>Status: </span><span>{completed ? 'Sold' : 'Available'}</span>
            <br />
            <span>For sale by: {forSaleBy}</span>
            <br />
            <span>Ad type: {adType}</span>
            <br />
            <span>
              {
                belongToCurrentUser
                  ? completed ? null : <a onClick={editPost.bind(null, this.props.itemInfo)}>Edit</a>
                  : <a href='#'>{ownerName}</a>
              }
              <a href='#'>More</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
