import React from 'react'

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

  purchasePromotionTemplate () {
    const {promotionSet = [], purchasePromotion} = this.props
    return (
      <div>
        {
          promotionSet.map(p => {
            const {id, duration, price} = p
            return (
              <div>
                <span>Duration: {duration}</span>
                <span>Price: {price}</span>
                <button onClick={purchasePromotion.bind(null, id)}>Buy</button>
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
      </div>
    )
  }
}
