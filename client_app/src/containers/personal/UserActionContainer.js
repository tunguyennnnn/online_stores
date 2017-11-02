import React from 'react'
import ActionButton from '../../components/personal/ActionButton'
import * as FA from 'react-icons/fa'

export default class UserActionContainer extends React.Component {
  render () {
    return (
      <div>
        <ActionButton icon={FA.FaHome} action={this.props.navigateToHomePage} actionName='Home' />
        <ActionButton icon={FA.FaPlus} action={this.props.addPost} actionName='New' />
      </div>
    )
  }
}
