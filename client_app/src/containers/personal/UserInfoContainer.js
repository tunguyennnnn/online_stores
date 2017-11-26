import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Item from '../../components/Item'
import NewPostForm from '../../components/personal/NewPostForm'
import NewRentForm from '../../components/personal/NewRentForm'
import PlanPurchase from '../../components/personal/PlanPurchase'
import TransactionModel from '../../components/TransactionModel'
import { Grid, Message } from 'semantic-ui-react'


export default class UserInfoContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      modelStatus: false,
      purchaseFunc: () => {},
      transactionInfo: {}
    }
  }

  performPurchase (cardDetail) {
    const {purchaseFunc, transactionInfo} = this.state
    purchaseFunc(transactionInfo, cardDetail)
    this.setState({modalStatus: false})
  }

  closeModal () {
    this.setState({modalStatus: false})
  }

  openTransaction (purchaseFunc, transactionInfo) {
    this.setState({modalStatus: true, purchaseFunc, transactionInfo})
  }
  handleMessage = () => {
    if(this.props.userInfo.message || this.props.userInfo.error){
      setTimeout(() => this.props.updateMessage(), 5000)
    }
  }
  handleSuccessMessage = () => {
    let {message, error} = this.props.userInfo;
    console.log('in handleErrorMesage', message)
    if(message){
      return (
        <Message
          positive
          header='Success!'
          content={message}
        />
      )
    } else if (error) {
        return (
          <Message
            negative
            header='Error!'
            content={error}
          />
        )
      }
    }
  render () {
    const {data, newPost, showAll, newRent, postInfo, stores, message} = this.props.userInfo
    console.log(data)
    const {promotions, plans, available, plan, province, city} = data
    const {purchasePromotion, purchasePlan, deleteItem, firstName, lastName, userType, userEmail} = this.props
    console.log('userinfocontainer', this.props)
    const {items} = data
    return (
      <div>
        {this.handleSuccessMessage()}
        {this.handleMessage()}
        <TransactionModel status={this.state.modalStatus} transactionInfo={this.state.transactionInfo} closeModal={this.closeModal.bind(this)} purchase={this.performPurchase.bind(this)} />
        {newPost
          ? <NewPostForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} />
          : newRent
          ? <NewRentForm submitPost={this.props.submitPost} postInfo={postInfo} cancelPost={this.props.cancelPost} stores={stores} />
          : <Grid stackable>
            <PlanPurchase plans={plans} currentPlan={plan} available={available} purchase={this.openTransaction.bind(this, purchasePlan)} />
            <Grid.Row columns={3}>
              {
               items.map((d, i) => <Item key={i}
               page='USER_PAGE'
               deleteItem={deleteItem}
               firstName={firstName}
               lastName={lastName}
               userEmail={userEmail}
               province={province}
               city={city}
               userType={userType}
               belongToCurrentUser={'true'}
               purchasePromotion={this.openTransaction.bind(this, purchasePromotion)}
               promotionSet={promotions}
               editPost={this.props.editPost}
               itemInfo={d} />)
              }
            </Grid.Row>
          </Grid>
        }
      </div>
    )
  }
}
