import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ShopCartCounter from 'components/Cart/ShopCartCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from 'store/cart';

const CartModalItem = ({ item }) => {
  const dispatch = useDispatch();
  const icon = <FontAwesomeIcon icon={faTrashCan} />;
  const { imageUrl, name, price, id, number_of_items } = item;

  const deleteItemHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="cart-modal-item">
        <img src={imageUrl} className="cart-modal-item__image" alt={name} />
        <div className="cart-modal-item__wrap">
          <h3 className="cart-modal-item__title">{name}</h3>
          <p className="cart-modal-item__text">
            <span>{number_of_items}</span>x
            <span className="cart-modal-item__amount">${price / 100}</span>
          </p>
          <ShopCartCounter product={item} />
        </div>
        <button className="cart-modal-item__delete" onClick={deleteItemHandler}>
          {icon}
        </button>
      </div>
      <hr className="cart-modal-item__bottom-line" />
    </>
  );
};

CartModalItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartModalItem;
