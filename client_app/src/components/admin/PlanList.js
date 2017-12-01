import React from 'react'
import { List, Header } from 'semantic-ui-react'

export default class PlanList extends React.Component {
  render () {
    const {plans} = this.props
    const mStyle = {marginLeft: '5%', marginBottom: '2%'}
    const gStyle = {marginLeft: '5%', marginRight: '15%', marginBottom: '3%'}
    return (
      <div>
        <Header style={mStyle} as='h1'>Current plans</Header>
        <List style={gStyle} celled>
          {
            plans.map((plan, i) =>
              <List.Item key={i}>
                <List.Icon name={plan.available ? 'checkmark' : 'remove'} />
                <List.Content>{`${plan.name} - ${plan.price} CAD - ${plan.duration} days`}</List.Content>
              </List.Item>
            )
          }
        </List>
      </div>
    )
  }
}
