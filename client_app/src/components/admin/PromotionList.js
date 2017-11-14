import React from 'react'
import { List } from 'semantic-ui-react'

export default class PromotionList extends React.Component {
  render () {
    const {promotions} = this.props
    return (
      <div>
        <h5>Current plans</h5>
        <List>
          {
            promotions.map((promotion, i) =>
              <List.Item key={i}>
                <List.Icon name={promotion.available ? 'checkmark' : 'remove'} />
                <List.Content>{`${promotion.title} - ${promotion.price} CAD - ${promotion.duration} days`}</List.Content>
              </List.Item>
            )
          }
        </List>
      </div>
    )
  }
}
