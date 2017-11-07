import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as NavigationActions from '../actions/navigation-actions'

import { Grid, Divider } from 'semantic-ui-react'

import Item from '../components/item'
import Navbar from '../components/navbar/navbar'
import Categories from '../components/categories/Categories'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.allItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...NavigationActions
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

    const navbar = () => (
      <Navbar
      userEmail={'tunguyen@gmail.com'}
      navigateToHomePage={navigateToHomePage.bind(null)}
      navigateToPersonalPage={navigateToPersonalPage.bind(null, 'tunguyen@gmail.com')}
      />
    )

    const menu = () => (
      <Grid.Row centered>
        <Categories />
        <Divider hidden />
      </Grid.Row>
    )

    const listOfItems = () => (
      <Grid.Row>
        <div style={style} class='ui three stackable cards'>
          {items.map((d, i) => <Item key={i} itemInfo={d} />)}
        </div>
      </Grid.Row>
    )

    const {navigateToPersonalPage, navigateToHomePage, data} = this.props
    const {items} = data
    const style = {paddingLeft: '3%', paddingRight: '3%'}
    return (
      <div>
        {navbar()}
        <Grid>
          {menu()}
          {listOfItems()}
        </Grid>
      </div>
    )
  }
}
