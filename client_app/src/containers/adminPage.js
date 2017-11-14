import React from 'react'
import Item from '../components/Item'
import PlanForm from '../components/admin/PlanForm'
import PromotionList from '../components/admin/PromotionList'
import PlanList from '../components/admin/PlanList'
import PromotionForm from '../components/admin/PromotionForm'
import AccountForm from '../components/admin/AccountForm'
import * as AdminActions from '../actions/admin-actions'
import {connect} from 'react-redux'
import { Menu, Grid } from 'semantic-ui-react'

@connect((store) => ({
  pageState: store.adminPage,
  itemList: store.allItems
}),
  AdminActions
)

export default class AdminPage extends React.Component {
  componentWillMount () {
    this.props.fetchAdmin()
  }

  render () {
    console.log(this.props.pageState)
    const {showItems, fetchAdmin, createAdminAccount, createPlan, createPromotion, deleteItem, submitPlan, submitAccount, submitPromotion} = this.props
    const {pageState} = this.props
    const {items, promotions, plans} = this.props.pageState
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
            : (
              <Grid stackable>
                <Grid.Row columns={3}>
                  {items.map((info, i) => <Item key={i} itemInfo={info} />)}
                </Grid.Row>
              </Grid>
              )
          }
        }
      </div>
    )
  }
}
