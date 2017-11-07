import * as AN from '../ActionName'

export function filterItems (filterOptions) {
  return {
    type: AN.FILTER_ITEMS,
    payload: {
      filterOptions
    }
  }
}
