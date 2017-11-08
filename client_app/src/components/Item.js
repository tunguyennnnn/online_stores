
import React from 'react'
import { Grid, Card, Image, Divider } from 'semantic-ui-react'

export default class Item extends React.Component {
  render () {

    const {belongToCurrentUser, ownerName, editPost} = this.props
    const {imageUrl, title, description, price, postDate, completed, address, phoneNumber, adType, forSaleBy} = this.props.itemInfo
    const columnStyle = {paddingLeft: '1.5%', paddingRight: '1.5%', paddingBottom: '1%'}
    const cardStyle = {padding: '0px'}
    const myStyle = {
      display: 'inline-block',
      width: '100%',
      height: '400px',
      'backgroundPosition': 'center center',
      'backgroundSize': 'cover',
      'backgroundImage': `url(${imageUrl})`
    }
    return (
      <Grid.Column stretched style={columnStyle}>
        <div class='ui card col s12 fluid' style={cardStyle}>
          <div style={myStyle} />
          <div class='content'>
            <div class='header'>{title}</div>
            <div class='description'>{description}</div>
            <Divider horizontal hidden />
            <div class='meta' style={{color: '#78909c'}}>Price: {`${price} CAD`}</div>
            <div class='meta' style={{color: '#78909c'}}>Address: {address} </div>
            <div class='meta' style={{color: '#78909c'}}>Phone number: {phoneNumber} </div>
          </div>
          <div class='content extra'>
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
            </span>
          </div>
          <div class='ui button'>More</div>
        </div>
      </Grid.Column>
    )
  }
}
