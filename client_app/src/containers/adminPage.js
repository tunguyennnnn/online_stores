import React from 'react'
import Item from '../components/Item'
import PlanForm from '../components/admin/PlanForm'
import PromotionList from '../components/admin/PromotionList'
import PlanList from '../components/admin/PlanList'
import PromotionForm from '../components/admin/PromotionForm'
import AccountForm from '../components/admin/AccountForm'
import TransactionList from '../components/admin/TransactionList'
import * as AdminActions from '../actions/admin-actions'
import {connect} from 'react-redux'
import { Menu, Grid } from 'semantic-ui-react'
import {logout} from '../actions/auth-actions'
import {deleteItem} from '../actions/personalPageAction'

@connect((store) => ({
  pageState: store.adminPage,
  itemList: store.allItems
}),
  {...AdminActions,logout, deleteItem}

)

export default class AdminPage extends React.Component {
  componentWillMount () {
    setTimeout(() => this.props.fetchAdmin(), 100)
  }

  render () {
    const {showItems, logout, fetchAdmin, createAdminAccount, createPlan, createPromotion, deleteItem, submitPlan, submitAccount, submitPromotion, showTransaction} = this.props
    const {pageState} = this.props
    const {items, promotions, plans, transactions} = this.props.pageState
    console.log(items)
    return (
      <div class='row'>
        <Menu>
          <Menu.Item active={pageState.items && !(pageState.plan || pageState.promotion || pageState.account)} onClick={showItems}>
            Items
          </Menu.Item>
          <Menu.Item active={pageState.transaction} onClick={showTransaction}>
          Transaction
          </Menu.Item>
          <Menu.Item active={pageState.plan} onClick={createPlan}>
            Plans
          </Menu.Item>
          <Menu.Item active={pageState.promotion} onClick={createPromotion}>
            Promotions
          </Menu.Item>
          <Menu.Item active={pageState.account} onClick={createAdminAccount}>
            Accounts
          </Menu.Item>
          <Menu.Item onClick={logout} position='right'>
            Logout
          </Menu.Item>
        </Menu>
        {
          pageState.plan
            ? <div>
                <PlanList plans={plans} />
                <PlanForm submitPlan={submitPlan} />
              </div>
            : pageState.promotion
            ? <div>
                <PromotionList promotions={promotions}/>
                <PromotionForm submitPromotion={submitPromotion} />
              </div>
            : pageState.account
            ? <AccountForm submitAccount={submitAccount} />
            : pageState.transaction
            ? <TransactionList transactions={transactions} />
            : (
              <Grid stackable>
                <Grid.Row columns={3}>
                  {items.map((info, i) => <Item key={i} page='ADMIN_PAGE' itemInfo={info} deleteItem={deleteItem}/>)}
                </Grid.Row>
              </Grid>
              )
          }
      </div>
    )
  }
}
