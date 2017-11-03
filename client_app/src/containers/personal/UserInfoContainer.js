import React from 'react'
import Item from '../../components/Item'
import NewPostForm from '../../components/personal/NewPostForm'

export default class UserInfoContainer extends React.Component {
  render () {
    const {data, newPost, showAll, postInfo} = this.props.userInfo
    const {items} = data
    return (
      <div class='ui four stackable cards'>
        {newPost
          ? <NewPostForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} />
          : items.map((d, i) => <Item key={i} belongToCurrentUser={'true'} editPost={this.props.editPost} itemInfo={d} />)}
      </div>
    )
  }
}
