import React from 'react'
import { Button } from 'semantic-ui-react'

export default class ActionButton extends React.Component {
  render () {
    const {icon, action, actionName} = this.props
    return (
      <div class='col s12'>
        <Button icon={icon} onClick={action}> {actionName} </Button>
      </div>
    )
  }
}
