import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

export default class Item extends React.Component {
  render () {
    const {imageUrl, title, description, price} = this.props.itemInfo
    return (
      <Grid.Column>
        <Card>
          <Image src={imageUrl} />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{price}</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card>
      </Grid.Column>
    )
  }
}
