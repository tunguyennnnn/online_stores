import React from 'react'
import { Image, Item } from 'semantic-ui-react'

export default class TransactionList extends React.Component {
  render () {
    const {transactions} = this.props
    const style = {border: 'solid 2px grey', borderRadius: '5px', padding: '5px'}
    return (
      <div>
        <Item.Group style={{margin: '2%'}}>
        {
          transactions.map(t => {
            const {user_id, imageUrl, firstName, email, lastName, amount, dateOfPayment, cardDetail, type, title, startDate, endDate, lastDate} = t
            return (
              <Item style={style}>
                <Item.Image src={imageUrl || 'https://pbs.twimg.com/profile_images/550875123939418113/DxFHPaxm.jpeg'} />
                <Item.Content>
                  <Item.Header>Type: {type.toUpperCase()}</Item.Header>
                  {
                    type === 'promotions' ?
                    <Item.Description>
                      <b>{`Item's Title: ${title}`}</b>
                      <br />
                    </Item.Description>
                    : null
                  }
                  <Item.Meta>{`${firstName} ${lastName}  -- ${email}`}</Item.Meta>
                  <Item.Meta>Amount Paid: {amount} CAD</Item.Meta>
                  <Item.Meta>Card Information: {cardDetail}</Item.Meta>
                  <Item.Meta>Paid At: {dateOfPayment}</Item.Meta>
                  <Item.Meta>Valid Until: {endDate || lastDate}</Item.Meta>
                </Item.Content>
              </Item>
            )
          })
        }
        </Item.Group>
      </div>
    )
  }
}
