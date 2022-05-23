import { createSelector } from 'reselect';
import { getCategories } from 'store/categories/selectors';
import { getProducts } from 'store/products/selectors';

const linkProductsAndCategories = (categories, products) => {
  const categoriesArray = categories.map((category, index) => {
    return {
      [category.category_name]: products.filter(
        (product) => product.category_id === index + 1
      ),
    };
  });

  return categoriesArray;
};

export const getCategoriesWithProducts = createSelector(
  getCategories,
  getProducts,
  linkProductsAndCategories
);
