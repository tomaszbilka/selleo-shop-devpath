import { useState, useEffect, useCallback } from 'react';
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

  const changeActiveButtonsHandler = useCallback(
    (title) => {
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
    },
    [isActive]
  );

  return (
    <div className="general-container">
      <SectionHeader title="Our Products" description={description} />
      <div className="general-btn-container">
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
      </div>
      {status === 'rejected' && <Error>{errorMsg}</Error>}
      {status === 'pending' && <LoadingSpinner size="small" />}
      {status === 'fulfilled' && <GridProducts products={selectedProducts} />}
    </div>
  );
};

export default ShowProductsSection;
