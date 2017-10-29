import React from 'react'

export default class ActionButton extends React.Component {
  render () {
    const {icon, action} = this.props
    const style = {marginTop: '5px', height: '50px'}
    return (
      <div class='col s12' style={style} onClick={action}>
        {React.createElement(icon, {className: 'fa-3x'})}
      </div>
    )
  }
}
