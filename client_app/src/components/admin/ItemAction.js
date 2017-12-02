import React from 'react'
import { Button } from 'semantic-ui-react'

export default class AdminItemAction extends React.Component {
  render () {
    const {deleteItem, showTransaction} = this.props
    return (
      <div>
        <Button.Group style={{width: '100%'}}>
          <Button color='red' onClick={deleteItem}>Delete Item</Button>
          <Button color='blue' onClick={showTransaction}>Show Transaction</Button>
        </Button.Group>
      </div>
    )
  }
}
