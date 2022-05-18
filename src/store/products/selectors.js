export const getProducts = (state) => {
  return Object.values(state.products.byId);
};

export const getStatus = (state) => {
  return state.products.status;
};

export const getFeaturedProducts = (state) => {
  return getProducts(state).filter((product) => product.featured);
};

export const getOnSaleProducts = (state) => {
  return getProducts(state).filter((product) => product.on_sale);
};

export const getIsNewProducts = (state) => {
  return getProducts(state).filter((product) => product.is_new);
};
