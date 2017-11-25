import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage, navigateToPersonalPage} from '../actions/navigation-actions'
import {logout} from '../actions/auth-actions'
import {addPost, submitPost, cancelPost, editPost, fetchUser, addRent, purchasePromotion, purchasePlan, deleteItem} from '../actions/personalPageAction'
import {fetchStores} from '../actions/storeAction'

import { Menu, Grid } from 'semantic-ui-react'
import UserSettings from '../components/userSettings/UserSettings'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {navigateToHomePage, addPost, cancelPost, submitPost, editPost, fetchUser, addRent, purchasePromotion, logout, navigateToPersonalPage, purchasePlan, deleteItem, fetchStores}
)
export default class PersonalPage extends React.Component {
  componentDidMount () {
    setTimeout(() => this.props.fetchUser(), 100)
    setTimeout(() => this.props.fetchStores(), 100)
  }

  render () {
    const style = {marginTop: '2vw'}
    const {userInfo, navigateToHomePage, navigateToPersonalPage, logout, addPost, cancelPost, submitPost, editPost, addRent, purchasePromotion, purchasePlan, deleteItem} = this.props
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
            Ad
          </Menu.Item>
          <Menu.Item active={userInfo.newRent} onClick={addRent}>
            Physical Ad
          </Menu.Item>
          <UserSettings userId={userId} email={email} navigateToPersonalPage={navigateToPersonalPage} logout={logout} />
        </Menu>
        <UserInfoContainer
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
