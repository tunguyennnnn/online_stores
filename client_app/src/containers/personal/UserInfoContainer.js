import React from 'react'
import Item from '../../components/Item'
import NewPostForm from '../../components/personal/NewPostForm'
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
    const {data, newPost, showAll, postInfo} = this.props.userInfo
    const {items} = data
    const {lst1, lst2, lst3} = this.groupItem(items)
    return (
      <Grid stackable>
        <Grid.Row columns={3}>
          {newPost
            ? <NewPostForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} />
            : items.map((d, i) => <Item key={i} belongToCurrentUser={'true'} editPost={this.props.editPost} itemInfo={d} />)}
        </Grid.Row>
      </Grid>
    )
  }
}
