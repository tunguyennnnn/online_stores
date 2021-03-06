import * as AN from '../ActionName'

export function showItems () {
  return {
    type: AN.SHOW_ALL_ITEMS_ADMIN_PAGE
  }
}

export function fetchAdmin () {
  return {
    type: AN.FETCH_ADMIN
  }
}

export function receivedAdminInfo (response) {
  return {
    type: AN.RECEIVED_ADMIN_INFO,
    payload: {
      ...response
    }
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

export function createPlanSuccess (response) {
  return {
    type: AN.CREATE_PLAN_SUCCESS,
    payload: {
      ...response
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

export function showTransaction () {
  return {
    type: AN.SHOW_TRANSACTION
  }
}

export function createPromotion () {
  return {
    type: AN.CREATE_PROMOTIONAL_PLAN
  }
}

export function createPromotionSuccess (response) {
  return {
    type: AN.CREATE_PROMOTION_SUCCESS,
    payload: {
      ...response
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
