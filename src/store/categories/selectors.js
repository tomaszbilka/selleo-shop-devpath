export const getCategories = (state) => {
  return Object.values(state.categories.byId);
};
