import { createSelector } from 'reselect';
import { getCategories } from 'store/categories/selectors';

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

const linkCategoriesAndProducts = (categories, products) => {
  const productsArrayWithCategory = products.map((product) => {
    const categoryId = product.category_id;
    const categoryNameObject = categories.find(
      (category) => category.id === categoryId
    );
    return {
      ...product,
      category_name: categoryNameObject.category_name,
    };
  });

  return productsArrayWithCategory;
};

export const getProductsWithCategories = createSelector(
  getCategories,
  getProducts,
  linkCategoriesAndProducts
);

export const getIsFavoriteStatusFromProducts = (state) => {
  return getProducts(state).map((product) => {
    return {
      id: product.id,
      isFavorite: product.isFavorite,
    };
  });
};
