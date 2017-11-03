import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as NavigationActions from '../actions/navigation-actions'
// import Header from '../components/mainpage/Header'
import Navbar from '../components/navbar/navbar'
import Item from '../components/item'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    items: state.items
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
    const style = {marginTop: '2vw', marginBottom: '2vw'}
    const {navigateToPersonalPage, items} = this.props
    return (
      <div>
        <Navbar userEmail={'tunguyen@gmail.com'}
        navigateToPersonalPage={navigateToPersonalPage.bind(null, 'tunguyen@gmail.com')}/>
      <div class='ui four cards'>
          {items.map((d, i) =><Item key={i} itemInfo={d} />)}
        </div>
      </div>
    )
  }
}
