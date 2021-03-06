import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage, navigateToPersonalPage} from '../actions/navigation-actions'
import {logout} from '../actions/auth-actions'
import {addPost, submitPost, cancelPost, editPost, fetchUser, addRent, purchasePromotion, purchasePlan, deleteItem, updateMessage, gotoHomePage} from '../actions/personalPageAction'
import {fetchStores} from '../actions/storeAction'

import { Menu, Grid } from 'semantic-ui-react'
import UserSettings from '../components/userSettings/UserSettings'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {
    gotoHomePage,
    addPost,
    cancelPost,
    submitPost,
    editPost,
    fetchUser,
    addRent,
    purchasePromotion,
    logout,
    navigateToPersonalPage,
    purchasePlan,
    deleteItem,
    fetchStores,
    updateMessage
  }
)
export default class PersonalPage extends React.Component {
  componentDidMount () {
    setTimeout(() => this.props.fetchUser(), 100)
    setTimeout(() => this.props.fetchStores(), 100)
  }
  render () {
    const style = {marginTop: '2vw'}
    const {userInfo, gotoHomePage, navigateToPersonalPage, logout, addPost, cancelPost, submitPost, editPost, addRent, purchasePromotion, purchasePlan, deleteItem, updateMessage} = this.props
    const {email, userId, firstName, lastName, userType} = userInfo.data
    return (
      <div>
        <Menu fluid>
          <Menu.Item header onClick={gotoHomePage}>
          Home
          </Menu.Item>
          <Menu.Item active={userInfo.showAll && !(userInfo.newPost || userInfo.newRent)} onClick={cancelPost}>
            Items
          </Menu.Item>
          <Menu.Item active={userInfo.newPost} onClick={addPost}>
            Ad
          </Menu.Item>
          <Menu.Item active={userInfo.newRent} onClick={addRent}>
            Physical Ad
          </Menu.Item>
          <UserSettings userId={userId} email={email} navigateToPersonalPage={navigateToPersonalPage} logout={logout} />
        </Menu>
        <UserInfoContainer
          firstName={firstName}
          lastName={lastName}
          userEmail={email}
          userType={userType}
          updateMessage={updateMessage}
          purchasePlan={purchasePlan}
          userInfo={userInfo}
          submitPost={submitPost}
          purchasePromotion={purchasePromotion}
          cancelPost={cancelPost}
          editPost={editPost}
          deleteItem={deleteItem} />
      </div>
    )
  }
}
