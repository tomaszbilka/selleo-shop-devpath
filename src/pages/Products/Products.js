import { useLayoutEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GridProducts from 'components/Products/GridProducts';
import { getProducts } from 'store/products/selectors';
import SectionHeader from 'components/SectionHeader';
import ButtonSlim from 'components/UI/ButtonSlim';
import Wrapper from 'components/UI/Wrapper/Wrapper';
import ButtonSlimContainer from 'components/UI/ButtonSlimContainer';

const Products = () => {
  const { productCategory } = useParams();
  const [isActive, setIsActive] = useState(productCategory);
  const navigate = useNavigate();

  const products = useSelector(getProducts);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    setIsActive(productCategory);
  }, [productCategory]);

  const redirectToSeatsCategory = () => {
    navigate(`/products/seats`);
  };
  const redirectToBedsCategory = () => {
    navigate(`/products/beds`);
  };
  const redirectToOfficeCategory = () => {
    navigate(`/products/office`);
  };
  const redirectToKitchenCategory = () => {
    navigate(`/products/kitchen`);
  };
  const redirectToAllCategory = () => {
    navigate(`/products/all`);
  };

  return (
    <Wrapper>
      <SectionHeader
        title={productCategory.toUpperCase()}
        extraClassName="-margin-top"
      />
      <ButtonSlimContainer>
        <ButtonSlim
          title="seats"
          activeTitle={isActive}
          onClick={redirectToSeatsCategory}
        />
        <ButtonSlim
          title="beds"
          activeTitle={isActive}
          onClick={redirectToBedsCategory}
        />
        <ButtonSlim
          title="office"
          activeTitle={isActive}
          onClick={redirectToOfficeCategory}
        />
        <ButtonSlim
          title="kitchen"
          activeTitle={isActive}
          onClick={redirectToKitchenCategory}
        />
        <ButtonSlim
          title="all"
          activeTitle={isActive}
          onClick={redirectToAllCategory}
        />
      </ButtonSlimContainer>
      <GridProducts products={products} />
    </Wrapper>
  );
};

export default Products;
