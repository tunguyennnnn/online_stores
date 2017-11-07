import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class Categories extends React.Component {

  render () {
    const { filterItems } = this.props
    return (
      <Menu borderless='true' compact='true'>
        <Menu.Item name='Buy and Sell' onClick={filterItems.bind(null, {type: 'CATEGORY', category: 'BUY_AND_SELL'})} />
        <Menu.Item name='Rent' onClick={filterItems.bind(null, {type: 'CATEGORY', category: 'RENT'})} />
        <Menu.Item name='Services' onClick={filterItems.bind(null, {type: 'CATEGORY', category: 'SERVICES'})} />
        <Menu.Item name='Jobs' onClick={filterItems.bind(null, {type: 'CATEGORY', category: 'JOBS'})} />
      </Menu>
    )
  }
}
