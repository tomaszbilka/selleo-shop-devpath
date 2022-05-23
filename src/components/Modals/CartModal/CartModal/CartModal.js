import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeCartModal } from 'store/appState';
import CartModalItem from 'components/Modals/CartModal/CartModalItem';
import Overlay from 'components/UI/Overlay';

const items = [1, 2];

const CartModal = ({ onClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToCart = () => {
    dispatch(closeCartModal());
    navigate('/cart');
  };

  return (
    <Overlay onClick={onClick}>
      <div className="cart-modal">
        <div className="cart-modal__header">
          <h3 className="cart-modal__header__title">CART</h3>
          <button
            type="button"
            onClick={onClick}
            className="cart-modal__header__close"
          ></button>
        </div>
        <div className="cart-modal__items">
          {items.length === 0 && <p>no products</p>}
          {items.length > 0 &&
            items.map((item, index) => (
              <CartModalItem key={index} item={item} />
            ))}
        </div>
        <div className="cart-modal__controls">
          <button
            className="cart-modal__controls__btn"
            onClick={redirectToCart}
          >
            View Cart
          </button>
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
