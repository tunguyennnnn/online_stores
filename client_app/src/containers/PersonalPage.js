import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage} from '../actions/navigation-actions'
import {addPost, submitPost, cancelPost, editPost} from '../actions/personalPageAction'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {navigateToHomePage, addPost, cancelPost, submitPost, editPost}
)

export default class PersonalPage extends React.Component {
  render () {
    const style = {marginTop: '2vw'}
    const {userInfo, navigateToHomePage, addPost, cancelPost, submitPost, editPost} = this.props
    return (
      <div class='row' style={style}>
        <UserActionContainer
          navigateToHomePage={navigateToHomePage}
          addPost={addPost}
        />
        <UserInfoContainer userInfo={userInfo} submitPost={submitPost} cancelPost={cancelPost} editPost={editPost} />
      </div>
    )
  }
}
