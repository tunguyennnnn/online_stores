import React from 'react'
import { Button, Input, Icon, Header, Modal, Form, Grid } from 'semantic-ui-react'
import {openModal, closeModal} from '../../actions/modalActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
  return {
    modalStatus: state.modalStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openModal,
    closeModal
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MainItemAction extends React.Component {
  handleClose () {
    this.props.closeModal()
  }
  handleOpen () {
    console.log(this.props)
    this.props.openModal()
  }
  handleTransaction () {
    this.props.closeModal()
  }
  render () {

    return (
      <Modal
        trigger={<Button onClick={this.handleOpen.bind(this)}>Add</Button>}
        open={this.props.modalStatus.status}
        onClose={this.handleClose.bind(this)}
        size='small'
      >
        <Modal.Content>
          <Modal.Description>
          <Grid centered>
            <Input placeholder='Add credit card number' />
          </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleTransaction.bind(this)}>
            <Icon name='checkmark' /> Buy
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
