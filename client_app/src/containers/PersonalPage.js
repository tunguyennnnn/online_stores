import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserActionContainer from './personal/UserActionContainer'
import UserInfoContainer from './personal/UserInfoContainer'
import {navigateToHomePage} from '../actions/navigation-actions'

@connect((store) => ({
  userInfo: store.userInfo
}),
  {navigateToHomePage}
)

export default class PersonalPage extends React.Component {
  render () {
    const style = {marginTop: '2vw'}
    const {userInfo, navigateToHomePage} = this.props
    return (
      <div class='row' style={style}>
        <UserActionContainer navigateToHomePage={navigateToHomePage}/>
        <UserInfoContainer data={userInfo.data} />
      </div>
    )
  }
}
