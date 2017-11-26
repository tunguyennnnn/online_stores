import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { Grid, Divider, Message } from 'semantic-ui-react'

import * as NavigationActions from '../actions/navigation-actions'
import * as FilterActions from '../actions/filter-actions'
import * as AuthActions from '../actions/auth-actions'
import { rateAd } from '../actions/ratingAction'
import * as PersonalActions from '../actions/personalPageAction'
import Item from '../components/item'
import Navbar from '../components/navbar/navbar'
import {handleMessage, handleMessageUpdate} from '../utils/messageHandling'

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    data: state.allItems,
    pageState: state.mainPageState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...NavigationActions,
    ...PersonalActions,
    ...FilterActions,
    ...AuthActions,
    rateAd,
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  constructor () {
    super()
  }

  componentDidMount () {
    this.props.navigateToHomePage()
  }
  render () {
    const {showSubcategory, category, province} = this.props.pageState
    console.log('this.props',this.props)
    const {navigateToPersonalPage, navigateToHomePage, data, filterItems, userInfo, logout, rateAd, updateMessage} = this.props
    console.log
    const {items} = this.props.data
    const {email, userId, userType} = userInfo.data
    console.log(email)
    console.log(this.props)
    const navbar = () => (
      <Navbar
      userEmail={email}
      userId={userId}
      navigateToHomePage={navigateToHomePage.bind(null)}
      navigateToPersonalPage={navigateToPersonalPage.bind(null)}
      showSubcategory={showSubcategory}
      navigateToHomePage={navigateToHomePage}
      province={province}
      category={category}
      filterItems={filterItems}
      logout={logout}
      />
    )

    const listOfItems = (items) => (
        <Grid.Row columns={3}>
          {items.map((d, i) =>
            <Item
              key={i}
              page='HOME_PAGE'
              itemInfo={d}
              rateAd={rateAd.bind(this)}
              userType={userType}
            />
          )}
        </Grid.Row>
    )

    const body = (items, filterItems) => (
      <div>
        {handleMessage(this.props.userInfo.error, this.props.userInfo.message)}
        {handleMessageUpdate(this.props.userInfo.error, this.props.userInfo.message, updateMessage)}
        <Grid stackable>
          {listOfItems(items)}
        </Grid>
      </div>
    )

    return (
      <div>
        {navbar()}
        {body(items, filterItems)}
      </div>
    )
  }
}
