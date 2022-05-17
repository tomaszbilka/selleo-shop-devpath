export const getProducts = (state) => {
  return Object.values(state.products.byId);
};

export const getStatus = (state) => {
  return state.products.status;
};

//filters

//reselect - catchowanie danych
