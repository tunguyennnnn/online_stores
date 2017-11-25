import React from 'react'

export default class AdminItemAction extends React.Component {
  render () {
    const {deleteItem, showTransaction} = this.props
    return (
      <div>
        <button click={deleteItem}>Delete Item</button>
        <button click={showTransaction}>Show Transaction</button>
      </div>
    )
  }
}
