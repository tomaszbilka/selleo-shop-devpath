import Button from 'components/UI/Button';

const CartControl = () => {
  const clearCartHandler = () => {
    console.log('clear cart');
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
          <Button title="Apply Coupon" onClick={clearCartHandler} />
        </div>
      </div>
      <div className="cart-controls__button">
        <Button title="Clear Cart" onClick={acceptCouponCodeHandler} />
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
