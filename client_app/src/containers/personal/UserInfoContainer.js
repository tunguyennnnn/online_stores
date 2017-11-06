import React from 'react'
import Item from '../../components/Item'
import NewPostForm from '../../components/personal/NewPostForm'

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
      <div class='col s11'>
        <div class='ui three stackable cards'>
          {newPost
            ? <NewPostForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} />
            : items.map((d, i) => <Item key={i} belongToCurrentUser={'true'} editPost={this.props.editPost} itemInfo={d} />)}

        </div>
      </div>
    )
  }
}
