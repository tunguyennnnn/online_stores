import React from 'react'
import { Button, Input, Icon, Header, Modal, Form, Grid } from 'semantic-ui-react'

export default class TransactionModel extends React.Component {
  constructor () {
    super()
    this.state = {
      cardDetail: ''
    }
  }

  onChange (event) {
    console.log(this.state)
    this.setState({cardDetail: event.target.value})
  }

  render () {
    const {transactionInfo, type, closeModal, purchase} = this.props
    console.log(transactionInfo, type)
    return (
      <Modal
        open={this.props.status}
        onClose={closeModal}
        size='small'
      >
        <Modal.Content>
          <Modal.Description>
            <Grid centered>
              <Input onChange={this.onChange.bind(this)} placeholder='Add credit card number' />
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={purchase.bind(null, this.state.cardDetail)}>
            <Icon name='checkmark' /> Buy
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
