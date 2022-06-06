import { useLayoutEffect } from 'react';
import ShopCart from 'components/Cart/ShopCart';
import PageTitle from 'components/PageTitle';
import { useTitle } from 'react-use';

const Cart = () => {
  useTitle('Cart demo');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageTitle title="Cart" />
      <ShopCart />
    </>
  );
};

export default Cart;
