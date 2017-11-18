import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage} from '../actions/navigation-actions'
import {addPost, submitPost, cancelPost, editPost, fetchUser, addRent} from '../actions/personalPageAction'
import { Menu, Grid } from 'semantic-ui-react'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {navigateToHomePage, addPost, cancelPost, submitPost, editPost, fetchUser, addRent}
)

export default class PersonalPage extends React.Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    const style = {marginTop: '2vw'}
    const {userInfo, navigateToHomePage, addPost, cancelPost, submitPost, editPost, addRent} = this.props
    return (
      <div class='row' style={style}>
        <Menu>
          <Menu.Item active={userInfo.showAll && !(userInfo.newPost || userInfo.newRent)}>
            Items
          </Menu.Item>
          <Menu.Item active={userInfo.newPost} onClick={addPost}>
            New Ads
          </Menu.Item>
          <Menu.Item active={userInfo.newRent} onClick={addRent}>
            New Renting
          </Menu.Item>
          <Menu.Item onClick={navigateToHomePage}>
            Home
          </Menu.Item>
        </Menu>
        <UserInfoContainer userInfo={userInfo} submitPost={submitPost} cancelPost={cancelPost} editPost={editPost} />
      </div>
    )
  }
}
