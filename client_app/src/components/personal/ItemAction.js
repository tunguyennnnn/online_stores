import React from 'react'
import { Button } from 'semantic-ui-react'

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
    const {promotionSet = [], purchasePromotion} = this.props
    const {itemId} = this.props
    return (
      <div>
        {
          promotionSet.map((p, i) => {
            const {id, duration, price} = p
            return (
              <div key={i}>
                <span>Duration: {duration}</span>
                <span>Price: {price}</span>
                <button onClick={purchasePromotion.bind(null, {itemId, promotionId: id})}>Buy</button>
              </div>
            )
          })
        }
      </div>
    )
  }

  render () {
    const {promotion, available} = this.props
    return (
      <div>
        {
          available
          ? this.promotionTemplate()
          : this.purchasePromotionTemplate()
        }
        <Button color='red' onClick={this.props.deleteItem}>Delete</Button>
      </div>
    )
  }
}
