export const add_to_cart = (item) => {
  return {
    type: 'ADD_TO_BASKET',
    payload: {
      item,
    },
  }
}

export const adjust_food_quantity = (itemID, value) => {
  return {
    type: 'ADJUST_FOOD_QUANTITY',
    payload: {
      id: itemID,
      quantity: value,
    },
  }
}

export const remove_food_from_cart = (itemID) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: {
      id: itemID,
    },
  }
}

export const display_current_item = (item) => {
  return {
    type: 'DISPLAY_CURRENT_ITEM',
    payload: {
      item,
    },
  }
}
