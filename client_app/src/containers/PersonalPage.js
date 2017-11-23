import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage} from '../actions/navigation-actions'
import {addPost, submitPost, cancelPost, editPost, fetchUser, addRent, purchasePromotion, logout} from '../actions/personalPageAction'
import { Menu, Grid } from 'semantic-ui-react'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {navigateToHomePage, addPost, cancelPost, submitPost, editPost, fetchUser, addRent, purchasePromotion, logout}
)

@connect(mapStateToProps, mapDispatchToProps)
export default class PersonalPage extends React.Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
  const style = {marginTop: '2vw'}
    const {userInfo, navigateToHomePage, navigateToPersonalPage, logout, addPost, cancelPost, submitPost, editPost, addRent, purchasePromotion} = this.props
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
        <UserInfoContainer userInfo={userInfo} submitPost={submitPost} purchasePromotion={purchasePromotion} cancelPost={cancelPost} editPost={editPost} />
      </div>
    )
  }
}
