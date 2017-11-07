import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as NavigationActions from '../actions/navigation-actions'
// import Header from '../components/mainpage/Header'
import Item from '../components/item'
import Navbar from '../components/navbar/navbar'
import Categories from '../components/categories/Categories'
import { Grid, Divider } from 'semantic-ui-react'

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

    const menu = () => (
      <Grid.Row centered>
        <Categories />
        <Divider hidden />
      </Grid.Row>
    )
    const navbar = () => (
          <Navbar
          userEmail={'tunguyen@gmail.com'}
          navigateToHomePage={navigateToHomePage.bind(null)}
          navigateToPersonalPage={navigateToPersonalPage.bind(null, 'tunguyen@gmail.com')}
          />
    )
    const {navigateToPersonalPage, navigateToHomePage, data} = this.props
    const {items} = data
    const style = {paddingLeft: '3%', paddingRight: '3%'}
    return (
      <div>
        {navbar()}
        <Grid>
          {menu()}
          <Grid.Row>
            <div style={style} class='ui three stackable cards'>
              {items.map((d, i) => <Item key={i} itemInfo={d} />)}
            </div>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
