import React from 'react'
import { Button, Header, Divider } from 'semantic-ui-react'
import { report } from '../actions/report'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Report from '../components/Reports/Report'

@connect((store) => ({
  reportData: store.report
}),
  {
    report
  }
)

export default class Reports extends React.Component {
  render () {
    const {report} = this.props.reportData
    console.log(report)
    return (
      <div>
        <Header>Report</Header>
        <Button onClick={this.props.report.bind(null,{id:'1'})}>List of users with the highest number of ads</Button>
        <Divider horizontal hidden />
        <Button onClick={this.props.report.bind(null, {id:'2'})}> details of the items posted within the last 10 days in buying/selling category</Button>
        <Divider horizontal hidden />
        <Button onClick={this.props.report.bind(null, {id:'3'})}>information of the users from the “Quebec” province selling winter men’s jacket.</Button>
        <Divider horizontal hidden />
        <Button onClick={this.props.report.bind(null, {id:'4'})}>list of all the items in the Rent category.</Button>
        <Divider horizontal hidden />
        <Button onClick={this.props.report.bind(null, {id:'5'})}>all categories that indicates the sellers whose items, sold in a given city, have the highest average rating for all items posted in that category and in the specified city.</Button>
        {
            <Report data={report} />
        }
        }
      </div>
    )
  }
}

// <Table celled striped>
//   <Table.Header>
//     <Table.Row>
//       <Table.HeaderCell colSpan='2'>List Of Users with highest number of ads</Table.HeaderCell>
//     </Table.Row>
//   </Table.Header>
//   <Table.Body>
