import React from 'react'
import Item from '../../components/Item'
import NewPostForm from '../../components/personal/NewPostForm'
import NewRentForm from '../../components/personal/NewRentForm'
import PlanPurchase from '../../components/personal/PlanPurchase'

import { Grid } from 'semantic-ui-react'

export default class UserInfoContainer extends React.Component {
  groupItem (items) {
    const lst1 = [], lst2 = [], lst3 = []
    items.forEach((item, i) => {
      if (i % 3 === 0) lst1.push(item)
      if (i % 3 === 1) lst2.push(item)
      if (i % 3 === 2) lst3.push(item)
    })
    return {lst1, lst2, lst3}
  }

  render () {
    const {data, newPost, showAll, newRent, postInfo} = this.props.userInfo
    const {promotions} = data
    const {purchasePromotion} = this.props
    const {items} = data
    return (
      newPost
        ? <NewPostForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} />
        : newRent
        ? <NewRentForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} />
      : <Grid stackable>
<<<<<<< HEAD
          <PlanPurchase purchase={() => {}} />
          <Grid.Row columns={3}>
            {
             items.map((d, i) => <Item key={i} page='USER_PAGE' belongToCurrentUser={'true'} purchasePromotion={purchasePromotion} promotionSet={promotions} editPost={this.props.editPost} itemInfo={d} />)
            }
          </Grid.Row>
        </Grid>
=======
        <PlanPurchase purchase={() => {}} />
        <Grid.Row columns={3}>
          {
           items.map((d, i) => <Item key={i} belongToCurrentUser={'true'} editPost={this.props.editPost} itemInfo={d} />)
          }
        </Grid.Row>
      </Grid>
>>>>>>> 8f31a3492f2a248c6563c1be7e8d2c5199716db6
    )
  }
}
