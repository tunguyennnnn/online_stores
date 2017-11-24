import * as AN from '../ActionName'

export function fetchUser () {
  return {
    type: AN.FETCH_USER_ITEMS
  }
}

export function purchasePromotion ({itemId, promotionId}, cardDetail) {
  return {
    type: AN.USER_PURCHASE_PROMOTION,
    payload: {
      itemId,
      promotionId,
      cardDetail
    }
  }
}

export function purchasePromotionSuccess (response) {
  return {
    type: AN.USER_PURCHASED_PROMOTION_SUCCESS,
    payload: {
      response
    }
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

export function purchasePlan ({planId}, cardDetail) {
  return {
    type: AN.USER_PURCHASE_PLAN,
    payload: {
      planId,
      cardDetail
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

export function deleteItem (itemId) {
  console.log(itemId)
  return {
    type: AN.USER_DELETE_ITEM,
    payload: {
      itemId
    }
  }
}
