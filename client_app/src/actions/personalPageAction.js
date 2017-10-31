import * as AN from '../ActionName'

export function addPost () {
  return {
    type: AN.ADD_NEW_POST
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

export function postItemSuccess (formInput) {
  return {
    type: AN.POST_ITEM_SUCCESS,
    payload: {
      formInput
    }
  }
}
