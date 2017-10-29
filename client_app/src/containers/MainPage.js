import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as NavigationActions from '../actions/navigation-actions'
import Header from '../components/mainpage/Header'
import Home from '../components/mainpage/Home'

const mapStateToProps = (state) => {
  return {
    user: state.user
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
    const data = [
      {"category":"Buy1&Sell",
      "subCategories":["Clothing","Books", "Electronics","Cars"]
    },
    {"category":"Buy2&Sell",
    "subCategories":["Clothing","Books", "Electronics","Cars"]
    },
    {"category":"Buy3&Sell",
    "subCategories":["Clothing","Books", "Electronics","Cars"]
    }       
    ]
    const {navigateToPersonalPage} = this.props
    console.log(navigateToPersonalPage);
    return (
      <div>
        {/* <Header userEmail={'tunguyen@gmail.com'}
                navigateToPersonalPage={navigateToPersonalPage.bind(null, 'tunguyen@gmail.com')}
        /> */}
        <Home data={data}/>
      </div>
    )
  }
}


export { MainPage }
