import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as NavigationActions from '../actions/navigation-actions'
import Navbar from '../components/mainpage/Navbar'

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
class MainPage extends React.Component {
  constructor () {
    super()
  }

  render () {
    console.log(this.props)
    const {navigateToPersonalPage} = this.props

    console.log(navigateToPersonalPage);

    return (
      <div>
        <Navbar data={items}/>
      </div>
    )
  }
}


export { MainPage }
