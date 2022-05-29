export const getAllCartItems = (state) => {
  return state.cart.items;
};

export const getNumberOfItemsInCart = (state) => {
  return state.cart.items.length;
};

export const getSumOfItemsCost = (state) => {
  return state.cart.items.reduce((sum, item) => {
    return sum + item.price * item.number_of_items;
  }, 0);
};
