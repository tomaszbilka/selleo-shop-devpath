export const getCategoriesWithSelectedProducts = (
  productCategory,
  productsWithCategories,
  allProducts
) => {
  let selectedProducts = [];
  switch (productCategory) {
    case 'seats':
      selectedProducts = getProductsFromCategory(
        productsWithCategories,
        'seats'
      );
      break;
    case 'beds':
      selectedProducts = getProductsFromCategory(
        productsWithCategories,
        'beds'
      );
      break;
    case 'office':
      selectedProducts = getProductsFromCategory(
        productsWithCategories,
        'office'
      );
      break;
    case 'kitchen':
      selectedProducts = getProductsFromCategory(
        productsWithCategories,
        'kitchen'
      );
      break;
    case 'all':
      selectedProducts = allProducts;
      break;
    default:
      selectedProducts = [];
      break;
  }
  return selectedProducts;
};

const getProductsFromCategory = (products, category) => {
  return products.filter((product) => product.category_name === category);
};
