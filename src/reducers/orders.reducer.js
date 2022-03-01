import { orderTypes } from "../types"

const initState = {}
export const orderDetails =  (state = initState, action) => {
  switch (action.type) {
    case orderTypes.GET_PENDING_ORDER:
      return {
        ...state,
        pendingOrder: action.payload
      }
      case orderTypes.FILTER_PENDING_ORDER:
      return {
        ...state,
        filteredOrderList: action.payload
      }
      
      case orderTypes.LOADING:
        return {
          ...state,
          isLoading: !!action.payload
        }
        
    default:
      return state
  }

}