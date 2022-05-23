import { useLayoutEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GridProducts from 'components/Products/GridProducts';
import { getProducts } from 'store/products/selectors';
import ButtonSlim from 'components/UI/ButtonSlim';
import { getCategoriesWithProducts } from 'store/reselectors';
import PageTitle from '../../components/PageTitle';

const Products = () => {
  const { productCategory } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(productCategory);
  let selectedProducts = [];

  const catWithProducts = useSelector(getCategoriesWithProducts);
  const allProducts = useSelector(getProducts);

  switch (productCategory) {
    case 'seats':
      selectedProducts = catWithProducts[0].seats;
      break;
    case 'beds':
      selectedProducts = catWithProducts[1].beds;
      break;
    case 'office':
      selectedProducts = catWithProducts[2].office;
      break;
    case 'kitchen':
      selectedProducts = catWithProducts[3].kitchen;
      break;
    case 'all':
      selectedProducts = allProducts;
      break;
    default:
      [];
      break;
  }

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
