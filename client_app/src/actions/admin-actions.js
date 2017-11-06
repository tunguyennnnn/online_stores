import * as AN from '../ActionName'

export function showItems () {
  return {
    type: AN.SHOW_ALL_ITEMS_ADMIN_PAGE
  }
}

export function createAdminAccount () {
  return {
    type: AN.CREATE_ADMIN_ACCOUNT
  }
}

export function submitAccount (formInput) {
  return {
    type: AN.SUBMIT_ADMIN_ACCOUNT,
    payload: {
      formInput
    }
  }
}

export function createAdminAccountSuccess (account) {
  return {
    type: AN.CREATE_ADMIN_ACCOUNT_SUCCESS,
    payload: {
      account
    }
  }
}

export function createPlan () {
  return {
    type: AN.CREATE_PLAN
  }
}

export function createPlanSuccess (plan) {
  return {
    type: AN.CREATE_PLAN_SUCCESS,
    payload: {
      plan
    }
  }
}

export function submitPlan (formInput) {
  return {
    type: AN.SUBMIT_PLAN,
    payload: {
      formInput
    }
  }
}

export function createPromotion () {
  return {
    type: AN.CREATE_PROMOTIONAL_PLAN
  }
}

export function createPromotionSuccess (promotion) {
  return {
    type: AN.CREATE_PROMOTION_SUCCESS,
    payload: {
      promotion
    }
  }
}

export function submitPromotion (formInput) {
  return {
    type: AN.SUBMIT_PROMOTIONAL_PLAN,
    payload: {
      formInput
    }
  }
}

export function deleteItem (itemId) {
  return {
    type: AN.DELETE_ITEM,
    payload: {
      itemId
    }
  }
}

export function deleteItemSuccess (itemId) {
  return {
    type: AN.DELETE_ITEM_SUCCESS,
    payload: {
      itemId
    }
  }
}
