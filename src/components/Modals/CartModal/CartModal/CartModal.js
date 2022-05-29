import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSumOfItemsCost } from 'store/cart/selectors';
import { toggleCartModal } from 'store/appState';
import CartModalItem from 'components/Modals/CartModal/CartModalItem';
import Overlay from 'components/UI/Overlay';
import { getAllCartItems } from 'store/cart/selectors';

const CartModal = ({ onClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(getAllCartItems);
  const totalCost = useSelector(getSumOfItemsCost);

  const redirectToCart = () => {
    dispatch(toggleCartModal(false));
    navigate('/cart');
  };

  return (
    <Overlay onClick={onClick}>
      <div className="cart-modal">
        <div className="cart-modal__header">
          <h3 className="cart-modal__title">CART</h3>
          <button
            type="button"
            onClick={onClick}
            className="cart-modal__close"
          ></button>
        </div>
        <div className="cart-modal__items">
          {cartItems.length === 0 && (
            <p className="cart-modal__empty">no products</p>
          )}
          {cartItems.length > 0 &&
            cartItems.map((item, index) => (
              <CartModalItem key={index} item={item} />
            ))}
        </div>
        <div className="cart-modal__controls">
          <button className="cart-modal__btn" onClick={redirectToCart}>
            View Cart
          </button>
          <div className="cart-modal__amount">${totalCost / 100}</div>
        </div>
      </div>
    </Overlay>
  );
};

CartModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartModal;
