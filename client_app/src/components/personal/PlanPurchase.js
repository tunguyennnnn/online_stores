import React from 'react'
import { List } from 'semantic-ui-react'

const PLANS = [
  {id: 1, title: 'PRIMIUM', price: 30.0, duration: 100},
  {id: 2, title: 'MIDIUM', price: 10, duration: 50},
  {id: 2, title: 'MIDIUM', price: 10, duration: 50}
]
export default class PlanPurchase extends React.Component {
  render () {
    const {plans, purchase} = this.props
    return (
      <div>
        {
          PLANS.map((plan, i) => {
            return (
              <List.Item key={i}>
                <List.Content>
                  {`${plan.title} - ${plan.price} CAD - ${plan.duration} days`}
                  <button onClick={purchase.bind(null, plan.id)}>Purchase</button>
                </List.Content>

              </List.Item>
            )
          })
        }
      </div>
    )
  }
}
