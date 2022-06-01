import { useLayoutEffect } from 'react';
import ShopCart from 'components/Cart/ShopCart';
import PageTitle from 'components/PageTitle';

const Cart = () => {
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
