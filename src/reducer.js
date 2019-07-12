import orders from './orders'

const initialState = {
   orders: orders,
   activeOrders: [],
   hotShelf: [],
   coldShelf: [],
   frozenShelf: [],
   overflowShelf: [],
   orderId: 0
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case "MAKE_ORDER":
         return {...state, activeOrders: [...state.activeOrders, action.payload, action.payload.overflow = false, action.payload.id = state.orderId, action.payload.delTime = action.delTime, action.payload.value = action.value], orderId: state.orderId + 1}
      case "ADD_TO_HOT_SHELF":
         return {...state, hotShelf: [...state.hotShelf, action.payload]}
      case "ADD_TO_COLD_SHELF":
         return {...state, coldShelf: [...state.coldShelf, action.payload]}
      case "ADD_TO_FROZEN_SHELF":
         return {...state, frozenShelf: [...state.frozenShelf, action.payload]}
      case "ADD_TO_OVERFLOW_SHELF":
         return {...state, overflowShelf: [...state.overflowShelf, action.payload, action.payload.overflow === true]}
      default:
         return state
   }
}

export default reducer