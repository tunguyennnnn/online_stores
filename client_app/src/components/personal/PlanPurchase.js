import React from 'react'
import { List } from 'semantic-ui-react'

export default class PlanPurchase extends React.Component {
  render () {
    const {plans, purchase, currentPlan, available} = this.props
    return (
      <div>
        {
          available
        ? <div>
            <div>Purchased at: {currentPlan.startDate}</div>
            <div>End at: {currentPlan.lastDate}</div>
          </div>
        : plans.map((plan, i) => {
            return (
              <List.Item key={i}>
                <List.Content>
                  {`${plan.title} - ${plan.price} CAD - ${plan.duration} days`}
                  <button onClick={purchase.bind(null, {planId: plan.id})}>Purchase</button>
                </List.Content>

              </List.Item>
            )
          })
        }
      </div>
    )
  }
}
