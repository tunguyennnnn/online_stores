import React from 'react'
import ActionButton from '../../components/personal/ActionButton'
import * as FA from 'react-icons/fa'

export default class UserActionContainer extends React.Component {
  render () {
    const style = {background: '#80cbc4', border: '0px solid', borderRadius: '5px', height: '100%', padding: '0'}
    return (
      <div class='col s1' style={style}>
        <div class='row' style={{padding: 0, margin: 0}}>
          <ActionButton icon={FA.FaHome} action={this.props.navigateToHomePage} actionName='Home' />
          <ActionButton icon={FA.FaPlus} action={this.props.addPost} actionName='New' />
        </div>
      </div>
    )
  }
}
