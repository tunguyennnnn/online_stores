import React from 'react'
import { Rating, Grid } from 'semantic-ui-react'

export default class Rate extends React.Component {
  handleRating (e, {rating}) {
    console.log(rating)
    const {adId, rateAd} = this.props
    rateAd({adId, score: rating})
  }
  render () {
    return (
      <Grid centered>
        <div style={{padding: '33px'}}>
          <Rating maxRating={5} defaultRating={this.props.itemScore} icon='star' size='massive' onRate={this.handleRating.bind(this)} />
        </div>
      </Grid>
    )
  }
}
