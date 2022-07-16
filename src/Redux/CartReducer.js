const initialState = {
  cart: [],
  itemQuantity: 0,
  totalPrice: 0,
}

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const isExistingItem = state.cart.find(
        (item) => item.id === action.payload.item.id,
      )
      return {
        ...state,
        cart: isExistingItem
          ? state.cart.map((item) =>
              item.id === action.payload.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.cart, { ...action.payload.item, quantity: 1 }],
        itemQuantity:
          state.cart.reduce((acc, cur) => acc + cur.quantity, 0) + 1,
      }

    case 'ADJUST_FOOD_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
        itemQuantity: Number(state.itemQuantity) + 1,
      }

    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id
        }),
      }

    default:
      return state
  }
}
export default CartReducer
