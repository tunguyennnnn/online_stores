import React from 'react'
import { Grid, Card, Image, Divider, Message } from 'semantic-ui-react'
import UserItemAction from './personal/ItemAction'
import AdminItemAction from './admin/ItemAction'
import Rate from './rate/Rate'

export default class Item extends React.Component {
  render () {
    const {id, email, firstName, lastName, imageUrl, title, description, price, phone, type, province, city, available, promotion, score, deletedAt, userType, adType} = this.props.itemInfo
    const forSaleBy = `${firstName} ${lastName}`
    const forSaleByPersonal = `${this.props.firstName} ${this.props.lastName}`
    const {page, promotionSet, purchasePromotion, deleteItem, rateAd, editPost} = this.props
    const columnStyle = {paddingLeft: '1.5%', paddingRight: '1.5%', paddingBottom: 'inherit'}
    const cardStyle = {padding: '0px'}
    const myStyle = {
      display: 'inline-block',
      width: '100%',
      height: '400px',
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'center',
      'backgroundSize': 'contain',
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
            <div class='meta' style={{color: '#78909c'}}>Province: {province === undefined ? this.props.province : province} </div>
            <div class='meta' style={{color: '#78909c'}}>City: {city === undefined ? this.props.city : city} </div>
            <div class='meta' style={{color: '#78909c'}}>Phone number: {phone} </div>
          </div>
          <div class='content extra'>
            <span>For sale by: {`${firstName === undefined ? forSaleByPersonal : forSaleBy} - ${this.props.userType !== undefined ? userType : this.props.userType}`}</span>
            <br />
            <span> E-mail address: {email === undefined ? this.props.userEmail : email} </span>
            <br />
            <span>Ad type: {`${type} - ${adType}`}</span>
            <br />
            {
              page === 'USER_PAGE'
              ? <UserItemAction promotionSet={promotionSet} editItem={editPost.bind(null, this.props.itemInfo)} deletedAt={deletedAt} deleteItem={deleteItem.bind(null, id)} available={available} purchasePromotion={purchasePromotion.bind(null)} itemId={id} promotion={promotion} />
              : page === 'ADMIN_PAGE'
              ? <AdminItemAction />
              : type === 'Physical ad' && page !== 'USER_PAGE'
              ? <Rate adId={id} rateAd={rateAd.bind(null)} itemScore={score} />
              : null
            }
          </div>
        </div>
      </Grid.Column>
    )
  }
}
