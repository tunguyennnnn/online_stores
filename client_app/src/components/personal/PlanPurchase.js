import React from 'react'
import { List, Button } from 'semantic-ui-react'

export default class PlanPurchase extends React.Component {
  render () {
    const {plans, purchase, currentPlan, available} = this.props
    console.log(this.props)
    return (
      <div style={{width: '50%'}}>
        {
          available
        ? <div>
          <div>Purchased at: {currentPlan.startDate}</div>
          <div>End at: {currentPlan.lastDate}</div>
        </div>
        : plans.map((plan, i) => {
          return (
            <List.Item key={i} style={{width: '100%', marginLeft: '1%', marginTop: '1%'}}>
              <List.Content>
                {`${plan.name} - ${plan.price} CAD - ${plan.duration} days`}
                <Button style={{marginLeft: '5%', width: '50%', marginBottom: '5%'}} onClick={purchase.bind(null, {planId: plan.id})}>Purchase</Button>
              </List.Content>
            </List.Item>
          )
        })
        }
      </div>
    )
  }
}
