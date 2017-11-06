import React from 'react'
import Item from '../components/Item'
import PlanForm from '../components/admin/PlanForm'
import PromotionForm from '../components/admin/PromotionForm'
import AccountForm from '../components/admin/AccountForm'
import * as AdminActions from '../actions/admin-actions'
import {connect} from 'react-redux'
import {Menu} from 'semantic-ui-react'

@connect((store) => ({
  pageState: store.adminPage,
  itemList: store.allItems
}),
  AdminActions
)

export default class AdminPage extends React.Component {
  render () {
    const {showItems, createAdminAccount, createPlan, createPromotion, deleteItem, submitPlan, submitAccount, submitPromotion} = this.props
    const {pageState} = this.props
    const {items} = this.props.itemList
    console.log(pageState, items)
    return (
      <div class='row'>
        <Menu>
          <Menu.Item active={pageState.items && !(pageState.plan || pageState.promotion || pageState.account)} onClick={showItems}>
            Items
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
        </Menu>
        {
          pageState.plan
            ? <PlanForm submitPlan={submitPlan} />
            : pageState.promotion
            ? <PromotionForm submitPromotion={submitPromotion} />
            : pageState.account
            ? <AccountForm submitAccount={submitAccount} />
            : (
                <div class='ui three stackable cards'>
                  {items.map((info, i) => <Item key={i} itemInfo={info} />)}
                </div>
              )
          }
        }
      </div>
    )
  }
}
