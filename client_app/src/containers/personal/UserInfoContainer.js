import React from 'react'
import Item from '../../components/Item'

export default class UserInfoContainer extends React.Component {
  render () {
    const {data} = this.props
    return (
      <div class='col s11'>
        {data.map((d, i) => <Item key={i} itemInfo={d} />)}
      </div>
    )
  }
}
