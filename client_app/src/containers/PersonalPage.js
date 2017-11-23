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

@connect((state) => ({
  userInfo: state.userInfo
}),
  {navigateToHomePage, navigateToPersonalPage, addPost, cancelPost, submitPost, editPost, fetchUser, addRent, logout}
)

export default class PersonalPage extends React.Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    const style = {marginTop: '2vw'}
    console.log(this.props)
    const {userInfo, navigateToHomePage, navigateToPersonalPage, logout, addPost, cancelPost, submitPost, editPost, addRent} = this.props
    console.log(userInfo.data)
    const {email} = userInfo.data
    console.log('email', email)
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
          <UserSettings email={email} navigateToPersonalPage={navigateToPersonalPage} logout={logout} />
        </Menu>
      <UserInfoContainer userInfo={userInfo} submitPost={submitPost} cancelPost={cancelPost} editPost={editPost} />
      </div>
    )
  }
}
