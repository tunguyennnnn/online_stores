import * as AN from '../ActionName'

export function fetchUser (userId) {
  return {
    type: AN.FETCH_USER_ITEMS,
    payload: {
      userId
    }
  }
}

export function purchasePromotionSuccess (promotion) {
  return {
    type: AN.USER_PURCHASED_PROMOTION_SUCCESS
  }
}

export function purchasePlanSuccess (plans) {
  return {
    type: AN.USER_PURCHASED_PLAN_SUCCESS,
    payload: {
      plans
    }
  }
}

export function purchasePlan (planId) {
  return {
    type: AN.USER_PURCHASE_PLAN,
    payload: {
      planId
    }
  }
}

export function purchasePromotion (promotionId, itemId) {
  return {
    type: AN.USER_PURCHASE_PROMOTION,
    payload: {
      itemId, promotionId
    }
  }
}

export function addPost () {
  return {
    type: AN.ADD_NEW_POST
  }
}

export function addRent () {
  return {
    type: AN.ADD_NEW_RENT
  }
}

export function editPost (postInfo) {
  return {
    type: AN.EDIT_POST,
    payload: {
      postInfo
    }
  }
}

export function submitPost (formInput) {
  return {
    type: AN.SUBMIT_NEW_POST,
    payload: {
      formInput
    }
  }
}

export function cancelPost () {
  return {
    type: AN.CANCEL_POST
  }
}

export function postItemSuccess (response) {
  return {
    type: AN.POST_ITEM_SUCCESS,
    payload: {
      ...response
    }
  }
}
