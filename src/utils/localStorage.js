export const setFavoritesToLocalStorage = (items) => {
  localStorage.setItem('favorites', JSON.stringify(items));
};

export const getFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorites'));
};

export const retrieveStoredName = () => {
  return localStorage.getItem('userName');
};

export const retrieveStoredToken = () => {
  return localStorage.getItem('token');
};
