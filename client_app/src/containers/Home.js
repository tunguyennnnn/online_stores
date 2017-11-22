import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { Grid, Divider } from 'semantic-ui-react'

import * as NavigationActions from '../actions/navigation-actions'
import * as FilterActions from '../actions/filter-actions'

import Item from '../components/item'
import Navbar from '../components/navbar/navbar'

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    data: state.allItems,
    pageState: state.mainPageState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...NavigationActions,
    ...FilterActions
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

  render () {
    const {showSubcategory, category=''} = this.props.pageState
    console.log('this.props',this.props)
    const {navigateToPersonalPage, navigateToHomePage, data, filterItems, userInfo} = this.props
    const {items} = this.props.data
    const {email} = userInfo.data
    console.log(email)

    const navbar = () => (
      <Navbar
      userEmail={email}
      navigateToHomePage={navigateToHomePage.bind(null)}
      navigateToPersonalPage={navigateToPersonalPage.bind(null, email)}
      showSubcategory={showSubcategory}
      navigateToHomePage={navigateToHomePage}
      category={category}
      filterItems={filterItems}
      />
    )

    const listOfItems = (items) => (
        <Grid.Row columns={3}>
          {items.map((d, i) => <Item key={i} itemInfo={d} />)}
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
