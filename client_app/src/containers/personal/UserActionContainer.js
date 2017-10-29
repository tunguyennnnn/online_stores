import React from 'react'
import ActionButton from '../../components/personal/ActionButton'
import * as FA from 'react-icons/fa'

export default class UserActionContainer extends React.Component {
  render () {
    const style = {background: '#80cbc4', border: '0px solid', borderRadius: '5px', height: '100%'}
    return (
      <div class='col s1' style={style}>
        <div class='row'>
          <ActionButton icon={FA.FaHome} action={this.props.navigateToHomePage} />
          <ActionButton icon={FA.FaPlus} />
        </div>
      </div>
    )
  }
}
