import React from 'react'
import { List } from 'semantic-ui-react'

export default class PlanList extends React.Component {
  render () {
    const {plans} = this.props
    console.log(plans)
    return (
      <div>
        <h5>Current plans</h5>
        <List>
          {
            plans.map((plan, i) =>
              <List.Item key={i}>
                <List.Icon name={plan.available ? 'checkmark' : 'remove'} />
                <List.Content>{`${plan.title} - ${plan.price} CAD - ${plan.duration} days`}</List.Content>
              </List.Item>
            )
          }
        </List>
      </div>
    )
  }
}
