import { useLayoutEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GridProducts from 'components/Products/GridProducts';
import { getProducts } from 'store/products/selectors';
import ButtonSlim from 'components/UI/ButtonSlim';
import { getProductsWithCategories } from 'store/products/selectors';
import PageTitle from 'components/PageTitle';
import { getCategoriesWithSelectedProducts } from 'utils/products';

const Products = () => {
  const { productCategory } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(productCategory);

  const productsWithCategoryName = useSelector(getProductsWithCategories);
  const allProducts = useSelector(getProducts);

  const selectedProducts = useMemo(
    () =>
      getCategoriesWithSelectedProducts(
        productCategory,
        productsWithCategoryName,
        allProducts
      ),
    [productCategory, productsWithCategoryName, allProducts]
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    setIsActive(productCategory);
  }, [productCategory]);

  const redirectToSelectedCategory = () => (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <>
      <PageTitle title={productCategory} />
      <div className="general-container">
        <div className="general-btn-container">
          <ButtonSlim
            title="seats"
            activeTitle={isActive}
            onClick={redirectToSelectedCategory('seats')}
          />
          <ButtonSlim
            title="beds"
            activeTitle={isActive}
            onClick={redirectToSelectedCategory('beds')}
          />
          <ButtonSlim
            title="office"
            activeTitle={isActive}
            onClick={redirectToSelectedCategory('office')}
          />
          <ButtonSlim
            title="kitchen"
            activeTitle={isActive}
            onClick={redirectToSelectedCategory('kitchen')}
          />
          <ButtonSlim
            title="all"
            activeTitle={isActive}
            onClick={redirectToSelectedCategory('all')}
          />
        </div>
        <GridProducts products={selectedProducts} />
      </div>
    </>
  );
};

export default Products;
