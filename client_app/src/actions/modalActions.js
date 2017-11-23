import * as AN from '../ActionName'

export function openModal () {
  return {
    type: AN.OPEN_MODAL,
    payload: true
  }
}

export function closeModal () {
  return {
    type: AN.CLOSE_MODAL,
    payload: false
  }
}
