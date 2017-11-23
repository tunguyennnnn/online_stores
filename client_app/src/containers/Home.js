import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { Grid, Divider } from 'semantic-ui-react'

import * as NavigationActions from '../actions/navigation-actions'
import * as FilterActions from '../actions/filter-actions'
import * as AuthActions from '../actions/auth-actions'
import * as PersonalActions from '../actions/personalPageAction'
import Item from '../components/item'
import Navbar from '../components/navbar/navbar'

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
    ...AuthActions
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
    this.props.navigateToHomePage()
  }

  componentDidMount () {
    console.log(this.props)
    this.props.fetchUser()
  }

  render () {
    const {showSubcategory, category, province} = this.props.pageState
    console.log('this.props',this.props)
    const {navigateToPersonalPage, navigateToHomePage, data, filterItems, userInfo, logout} = this.props
    const {items} = this.props.data
    const {email, userId} = userInfo.data
    console.log(email)
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
          {items.map((d, i) => <Item key={i} page='HOME_PAGE' itemInfo={d} />)}
        </Grid.Row>
    )

    const body = (items, filterItems) => (
      <div>
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
