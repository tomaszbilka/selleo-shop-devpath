import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartButton = ({ onClick }) => {
  return (
    <div className="cart-button" onClick={onClick}>
      <FontAwesomeIcon icon={faCartShopping} className="cart-button__icon" />
      <div className="cart-button__items">0 items</div>
      <div className="cart-button__amount">$0.00</div>
    </div>
  );
};

CartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartButton;
