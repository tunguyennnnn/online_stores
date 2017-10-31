import React from 'react'

export default class ActionButton extends React.Component {
  render () {
    const {icon, action, actionName} = this.props
    const style = {marginTop: '5px', height: '50px'}
    return (
      <div class='col s12' style={style} onClick={action}>
        <button>
          {React.createElement(icon, {className: 'fa-3x'})}
          <span>{actionName}</span>
        </button>
      </div>
    )
  }
}
