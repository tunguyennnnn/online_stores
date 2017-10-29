import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as NavigationActions from '../actions/navigation-actions'
// import Header from '../components/mainpage/Header'
import Navbar from '../components/navbar/navbar'

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

  componentWillMount () {
    this.props.navigateToHomePage()
  }

  render () {
    console.log(this.props.items)
    const data = [
      {'category':'BuyandSell',
      'subCategories':['Clothing','Books', 'Electronics','Cars']
      },
      {'category':'Rent',
      'subCategories':['Clothing','Books', 'Electronics','Cars']
      },
      {'category':'Services',
      'subCategories':['Clothing','Books', 'Electronics','Cars']
      }
    ]

    const {navigateToPersonalPage} = this.props

    return (
      <div>
        <Navbar userEmail={'tunguyen@gmail.com'}
        navigateToPersonalPage={navigateToPersonalPage.bind(null, 'tunguyen@gmail.com')}/>
      </div>
    )
  }
}


export { MainPage }
