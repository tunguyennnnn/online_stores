import React from 'react'
import { Menu, Grid } from 'semantic-ui-react'

export default class Categories extends React.Component {
  render () {
    return (
      <Menu borderless='true' compact='true'>
        <Menu.Item name='Buy and Sell' />
        <Menu.Item name='Rent' />
        <Menu.Item name='Services' />
        <Menu.Item name='Jobs' />
      </Menu>
    )
  }
}
