import React from 'react'
import { Button } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'

export default class UserItemAction extends React.Component {
  promotionTemplate (promotion = this.props.promotion) {
    const {price, startDate, endDate} = promotion
    return (
      <div>
        <div>Paid: {price}</div>
        <div>Pay Date: {startDate}</div>
        <div>End Date: {endDate}</div>
      </div>
    )
  }

  deleteItem () {
    const c = window.confirm('Are you sure to delete this Item?')
    if (c) this.props.deleteItem()
  }

  purchasePromotionTemplate () {
    const {promotionSet = [], purchasePromotion, deletedAt, sltype} = this.props
    const {itemId} = this.props
    
    const type = sltype.charAt(3)
    let extraCharge
    switch(type) {
      case 1:
        extraCharge = 0.2
        break
      case 2:
        extraCharge = 0.15
        break
      case 3:
        extraCharge = 0.1
        break
      case 4:
        extraCharge = 0.05
        break
      default:
        extraCharge = 0
    }

    return (
      <div style={{width: '100%'}}>
        { !deletedAt
          ? promotionSet.map((p, i) => {
            const {id, duration, price} = p
            const totalPrice = (price * 2 * 7) + (price * extraCharge)
            return (
              <div key={i}>
                <span>Duration: 7 | </span>
                <span>Price: {totalPrice}</span>
                <Button size='tiny' style={{marginLeft: '24%', marginBottom: '1%', width: '46%'}} positive onClick={purchasePromotion.bind(null, {itemId, promotionId: id})}>Buy</Button>
              </div>
            )
          })
        : null
        }
      </div>
    )
  }

  render () {
    const {promotion, available, deletedAt} = this.props
    const buttonStyle = {marginRight: '1%', border: 'none'}
    return (
      <div>
        {
          available
          ? this.promotionTemplate()
          : this.purchasePromotionTemplate()
        }
        {
          deletedAt
          ? <Message negative>Deleted At: {deletedAt}</Message>
          : <Button.Group style={{width: '100%'}}>
            <Button style={buttonStyle} color='red' onClick={this.props.deleteItem}>Delete</Button>
            <Button style={{border: 'none'}} color='blue' onClick={this.props.editItem}>Edit</Button>
          </Button.Group>
        }
      </div>
    )
  }
}
