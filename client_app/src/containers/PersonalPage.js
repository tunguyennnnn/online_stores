import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage, navigateToPersonalPage} from '../actions/navigation-actions'
import {logout} from '../actions/auth-actions'
import UserSettings from '../components/userSettings/UserSettings'

import {addPost, submitPost, cancelPost, editPost, fetchUser, addRent} from '../actions/personalPageAction'
import { Menu, Grid, Icon } from 'semantic-ui-react'

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navigateToHomePage,
    navigateToPersonalPage,
    addPost,
    cancelPost,
    submitPost,
    editPost,
    fetchUser,
    addRent,
    logout
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PersonalPage extends React.Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    const {userInfo, navigateToHomePage, navigateToPersonalPage, logout, addPost, cancelPost, submitPost, editPost, addRent} = this.props
    const {email, userId} = userInfo.data
    return (
      <div>
        <Menu fluid>
          <Menu.Item header onClick={navigateToHomePage}>
          Home
          </Menu.Item>
          <Menu.Item active={userInfo.showAll && !(userInfo.newPost || userInfo.newRent)}>
            Items
          </Menu.Item>
          <Menu.Item active={userInfo.newPost} onClick={addPost}>
            New Ad
          </Menu.Item>
          <Menu.Item active={userInfo.newRent} onClick={addRent}>
            New Renting
          </Menu.Item>
          <UserSettings userId={userId} email={email} navigateToPersonalPage={navigateToPersonalPage} logout={logout} />
        </Menu>
      <UserInfoContainer userInfo={userInfo} submitPost={submitPost} cancelPost={cancelPost} editPost={editPost} />
      </div>
    )
  }
}
