import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getStatus,
  getFeaturedProducts,
  getOnSaleProducts,
  getIsNewProducts,
} from 'store/products/selectors';
import GridProducts from 'components/Products/GridProducts';
import SectionHeader from 'components/SectionHeader';
import ButtonSlim from 'components/UI/ButtonSlim';
import Error from 'components/UI/Error';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import Wrapper from 'components/UI/Wrapper';
import ButtonSlimContainer from 'components/UI/ButtonSlimContainer';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore';

const errorMsg = 'Something went wrong!';

const ShowProductsSection = () => {
  const [isActive, setIsActive] = useState('New Arrival');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const status = useSelector(getStatus);
  const featuredProducts = useSelector(getFeaturedProducts);
  const onSaleProducts = useSelector(getOnSaleProducts);
  const newProducts = useSelector(getIsNewProducts);

  useEffect(() => {
    if (status === 'fulfilled') {
      setSelectedProducts(newProducts);
    }
  }, [status]);

  const changeActiveButtonsHandler = (title) => {
    setIsActive(title);
    if (title === 'Featured') {
      setSelectedProducts(featuredProducts);
    }
    if (title === 'On Sale') {
      setSelectedProducts(onSaleProducts);
    }
    if (title === 'New Arrival') {
      setSelectedProducts(newProducts);
    }
  };

  return (
    <Wrapper>
      <SectionHeader title="Our Products" description={description} />
      <ButtonSlimContainer>
        <ButtonSlim
          title="New Arrival"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
        <ButtonSlim
          title="Featured"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
        <ButtonSlim
          title="On Sale"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
      </ButtonSlimContainer>
      {status === 'rejected' && <Error>{errorMsg}</Error>}
      {status === 'pending' && <LoadingSpinner size="small" />}
      {status === 'fulfilled' && <GridProducts products={selectedProducts} />}
    </Wrapper>
  );
};

export default ShowProductsSection;
