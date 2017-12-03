import React from 'react'
import {Button, Message} from 'semantic-ui-react'

export default class AdminItemAction extends React.Component {
  render () {
    const {deleteItem, showTransaction, deletedAt} = this.props
    return (
      <div>
        {
          deletedAt
          ? <Message negative>Deleted At: {deletedAt}</Message>
          : <Button style={{width: '100%'}} color='red' onClick={deleteItem}>Delete</Button>
        }
      </div>
    )
  }
}
