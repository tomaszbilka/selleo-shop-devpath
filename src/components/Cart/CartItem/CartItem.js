import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ShopCartCounter from 'components/Cart/ShopCartCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from 'store/cart';

const CartItem = ({ product }) => {
  const { imageUrl, name, price, id, number_of_items } = product;
  const dispatch = useDispatch();
  const icon = <FontAwesomeIcon icon={faTrashCan} className="row__delete" />;

  const removeItemFromCartHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <tr className="row">
      <td>
        <img src={imageUrl} className="row__image" alt={name}></img>
      </td>
      <td>{name}</td>
      <td>${price / 100}</td>
      <td>{number_of_items}</td>
      <td>
        <ShopCartCounter product={product} />
      </td>
      <td>${(number_of_items * price) / 100}</td>
      <td onClick={removeItemFromCartHandler}>{icon}</td>
    </tr>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
