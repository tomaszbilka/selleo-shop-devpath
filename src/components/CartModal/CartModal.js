import PropTypes from 'prop-types';

import Overlay from '../UI/Overlay';

const CartModal = ({ onClick }) => {
  return (
    <Overlay onClick={onClick}>
      <div className="cart-modal">
        <div className="cart-modal__header">
          <h3 className="cart-modal__header__title">CART</h3>
          <div onClick={onClick} className="cart-modal__header__close"></div>
        </div>
        <div className="cart-modal__items">no products</div>
        <div className="cart-modal__controls">
          <button className="cart-modal__controls__btn">View Cart</button>
          <div className="cart-modal__controls__amount">$0.00</div>
        </div>
      </div>
    </Overlay>
  );
};

CartModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartModal;
