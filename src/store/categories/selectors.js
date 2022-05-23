export const getCategories = (state) => {
  return Object.values(state.categories.byId);
};

export const getCategoriesStatus = (state) => {
  return state.categories.status;
};
