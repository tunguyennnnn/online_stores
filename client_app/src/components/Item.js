import React from 'react'
<<<<<<< HEAD
import { Grid, Card, Image, Divider } from 'semantic-ui-react'
import UserItemAction from './personal/ItemAction'
import AdminItemAction from './admin/ItemAction'
import MainItemAction from './mainpage/ItemAction'

export default class Item extends React.Component {
  render () {
    const {belongToCurrentUser, ownerName, editPost, promotionSet, purchasePromotion, page} = this.props
    const {id, imageUrl, title, description, price, postDate, completed, address, phoneNumber, adType, forSaleBy, promotion, available} = this.props.itemInfo
=======
import { Grid, Divider, Button } from 'semantic-ui-react'

export default class Item extends React.Component {
  render () {
    const {email, firstName, lastName, imageUrl, title, description, price, postDate, completed, phone, type, province, city} = this.props.itemInfo
    const forSaleBy = `${firstName} ${lastName}`

    // style
>>>>>>> 8f31a3492f2a248c6563c1be7e8d2c5199716db6
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
            <div class='meta' style={{color: '#78909c'}}>Province: {province} </div>
            <div class='meta' style={{color: '#78909c'}}>City: {city} </div>
            <div class='meta' style={{color: '#78909c'}}>Phone number: {phone} </div>
          </div>
          <div class='content extra'>
            <span>Status: </span><span>{completed ? 'Sold' : 'Available'}</span>
            <br />
            <span>For sale by: {forSaleBy}</span>
            <br />
            <span> E-mail address: {email} </span>
            <br />
            <span>Ad type: {type}</span>
            <br />
          </div>
<<<<<<< HEAD
          {
            page === 'USER_PAGE'
            ? <UserItemAction promotionSet={promotionSet} available={available} purchasePromotion={purchasePromotion.bind(null, id)} promotion={promotion} />
            : page === 'ADMIN_PAGE'
            ? <AdminItemAction />
            : <MainItemAction />
          }
=======
          <Button color='green'>Buy</Button>
>>>>>>> 8f31a3492f2a248c6563c1be7e8d2c5199716db6
        </div>
      </Grid.Column>
    )
  }
}
