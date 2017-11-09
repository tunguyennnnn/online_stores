import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { Grid, Divider } from 'semantic-ui-react'

import * as NavigationActions from '../actions/navigation-actions'
import * as FilterActions from '../actions/filter-actions'

import Item from '../components/item'
import Navbar from '../components/navbar/navbar'
import Categories from '../components/categories/Categories'

const mapStateToProps = (state) => {
  return {
    user: state.user,
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
    console.log('category', category)
    const {navigateToPersonalPage, navigateToHomePage, data, filterItems} = this.props
    const {items} = this.props.data
    console.log(this.props)

    const navbar = () => (
      <Navbar
      userEmail={'tunguyen@gmail.com'}
      navigateToHomePage={navigateToHomePage.bind(null)}
      navigateToPersonalPage={navigateToPersonalPage.bind(null, 'tunguyen@gmail.com')}
      />
    )

    const categories = (filterItems, navigateToHomePage) => (
      <Grid.Row centered>
        <Categories showSubcategory={showSubcategory}  navigateToHomePage={navigateToHomePage} category={category} filterItems={filterItems}/>
        <Divider hidden />
      </Grid.Row>
    )

    const listOfItems = (items) => (
        <Grid.Row columns={3}>
          {items.map((d, i) => <Item key={i} itemInfo={d} />)}
        </Grid.Row>
    )

    const body = (items, filterItems) => (
      <div>
        <Grid>
          {categories(filterItems, navigateToHomePage)}
        </Grid>
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
