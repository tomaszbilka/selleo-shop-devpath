import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getSumOfItemsCost } from 'store/cart/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { getNumberOfItemsInCart } from 'store/cart/selectors';

const CartButton = ({ onClick }) => {
  const [animation, setAnimation] = useState(false);
  const numberOfItemsInCart = useSelector(getNumberOfItemsInCart);
  const totalCost = useSelector(getSumOfItemsCost);

  useEffect(() => {
    setAnimation(true);
    const animationCycle = setTimeout(() => {
      setAnimation(false);
    }, 200);

    return () => clearTimeout(animationCycle);
  }, [totalCost]);

  const classes = animation ? 'cart-button -animation' : 'cart-button';

  return (
    <button type="button" className={classes} onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} className="cart-button__icon" />
      <div className="cart-button__items">{numberOfItemsInCart} items</div>
      <div className="cart-button__amount">${totalCost / 100}</div>
    </button>
  );
};

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartButton;
