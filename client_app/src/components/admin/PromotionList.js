import React from 'react'
import { List, Header } from 'semantic-ui-react'

export default class PromotionList extends React.Component {
  render () {
    const {promotions} = this.props
    const mStyle = {marginLeft: '5%', marginBottom: '2%'}
    const gStyle = {marginLeft: '5%', marginRight: '15%', marginBottom: '3%'}
    return (
      <div>
        <Header style={mStyle} as='h1'>Current plans</Header>
        <List style={gStyle}>
          {
            promotions.map((promotion, i) =>
              <List.Item key={i}>
                <List.Icon name={promotion.available ? 'checkmark' : 'remove'} />
                <List.Content>{`${promotion.price} CAD - ${promotion.duration} days`}</List.Content>
              </List.Item>
            )
          }
        </List>
      </div>
    )
  }
}
