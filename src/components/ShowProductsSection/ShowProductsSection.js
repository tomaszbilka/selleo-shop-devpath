import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts, getStatus } from 'store/products/selectors';
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

  const products = useSelector(getProducts);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === 'fulfilled') {
      setSelectedProducts(products.filter((product) => product.is_new));
    }
  }, [status]);

  const changeActiveButtonsHandler = (title) => {
    setIsActive(title);
    if (title === 'Featured') {
      setSelectedProducts(products.filter((product) => product.featured));
    }
    if (title === 'On Sale') {
      setSelectedProducts(products.filter((product) => product.on_sale));
    }
    if (title === 'New Arrival') {
      setSelectedProducts(products.filter((product) => product.is_new));
    }
  };

  return (
    <section className="show-container">
      <SectionHeader title="Our Products" description={description} />
      <div className="show-container__btn-container">
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
    </section>
  );
};

export default ShowProductsSection;
