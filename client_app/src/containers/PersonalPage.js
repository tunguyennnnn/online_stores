import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
<<<<<<< HEAD
import {navigateToHomePage} from '../actions/navigation-actions'
import {addPost, submitPost, cancelPost, editPost, fetchUser, addRent, purchasePromotion} from '../actions/personalPageAction'
import { Menu, Grid } from 'semantic-ui-react'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {navigateToHomePage, addPost, cancelPost, submitPost, editPost, fetchUser, addRent, purchasePromotion}
)
=======
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
>>>>>>> 8f31a3492f2a248c6563c1be7e8d2c5199716db6

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
<<<<<<< HEAD
    const style = {marginTop: '2vw'}
    const {userInfo, navigateToHomePage, addPost, cancelPost, submitPost, editPost, addRent, purchasePromotion} = this.props
=======
    const {userInfo, navigateToHomePage, navigateToPersonalPage, logout, addPost, cancelPost, submitPost, editPost, addRent} = this.props
    const {email, userId} = userInfo.data
>>>>>>> 8f31a3492f2a248c6563c1be7e8d2c5199716db6
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
<<<<<<< HEAD
        <UserInfoContainer userInfo={userInfo} submitPost={submitPost} purchasePromotion={purchasePromotion} cancelPost={cancelPost} editPost={editPost} />
=======
      <UserInfoContainer userInfo={userInfo} submitPost={submitPost} cancelPost={cancelPost} editPost={editPost} />
>>>>>>> 8f31a3492f2a248c6563c1be7e8d2c5199716db6
      </div>
    )
  }
}
