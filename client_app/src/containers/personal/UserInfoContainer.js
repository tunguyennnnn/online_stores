import React from 'react'
import Item from '../../components/Item'
import NewPostForm from '../../components/personal/NewPostForm'
import {Grid } from 'semantic-ui-react'

export default class UserInfoContainer extends React.Component {
  render () {
    const {data, newPost, showAll} = this.props.userInfo
    const {items} = data
    return (
      <Grid container>
        <Grid.Row columns={3}>
          {newPost
            ? <NewPostForm submitPost={this.props.submitPost} cancelPost={this.props.cancelPost} />
            : items.map((d, i) => <Item key={i} itemInfo={d} />)}
        </Grid.Row>
      </Grid>
    )
  }
}
