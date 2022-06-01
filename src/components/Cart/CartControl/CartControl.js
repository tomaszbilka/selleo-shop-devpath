import { clearCart } from 'store/cart';
import { useDispatch } from 'react-redux';
import Button from 'components/UI/Button';

const CartControl = () => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const acceptCouponCodeHandler = () => {
    console.log('add coupon');
  };

  const redirectToCheckout = () => {
    console.log('go to checkout');
  };

  return (
    <div className="cart-controls">
      <div className="cart-controls__wrap">
        <input
          type="text"
          placeholder="enter your coupon here"
          className="cart-controls__input"
        />
        <div className="cart-controls__button">
          <Button title="Apply Coupon" onClick={acceptCouponCodeHandler} />
        </div>
      </div>
      <div className="cart-controls__button">
        <Button title="Clear Cart" onClick={clearCartHandler} />
      </div>
      <div className="cart-controls__button">
        <Button
          title="Proceed to Checkout"
          className="button -color-reverse"
          onClick={redirectToCheckout}
        />
      </div>
    </div>
  );
};

export default CartControl;
