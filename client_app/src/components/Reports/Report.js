import React from 'react'
const _ = require('lodash')
import { Table } from 'semantic-ui-react'

export default class Report extends React.Component {
  renderRow (cells) {
    console.log(cells)
    return _.values(cells).map(cell => {
      return <Table.Cell>{cell}</Table.Cell>
    })
  }
  render () {
    const {data} = this.props
    console.log('data', data)
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {
              _.keys(data[0]).map(head => <Table.HeaderCell> {head}</Table.HeaderCell>)
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {
          data.map(d => {
            return (<Table.Row>
              {this.renderRow(d)}
                </Table.Row>
            )
          })
        }
        </Table.Body>
      </Table>
    )
  }
}
