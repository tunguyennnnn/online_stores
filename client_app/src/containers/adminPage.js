import React from 'react'
import Item from '../components/Item'
import PlanForm from '../components/admin/PlanForm'
import PromotionForm from '../components/admin/PromotionForm'
import AccountForm from '../components/admin/AccountForm'
import * as AdminActions from '../actions/admin-actions'

// @connect((store) => ({
//   pageState: store.adminPage,
//   items: store.allItems
// }),
//   AdminActions
// )

export default class AdminPage extends React.Component {
  render () {
    const {createAdminAccount, createPlan, createPromotion, deleteItem, submitPlan, submitAccount, submitPromotion} = this.props
    const {pageState, items} = this.props
    return (
      <div class='row'>
        {
          pageState.items
            ? items.map((info, i) => <Item key={i} itemInfo={info} />)
            : pageState.plan
            ? <PlanForm submitPlan={submitPlan} />
            : pageState.promotion
            ? <PromotionForm submitPromotion={submitPromotion} />
            : <AccountForm submitAccount={submitAccount} />
          }
        }
      </div>
    )
  }
}
