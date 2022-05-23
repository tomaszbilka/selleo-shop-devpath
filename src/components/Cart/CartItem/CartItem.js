import ShopCartCounter from 'components/Cart/ShopCartCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartItem = () => {
  const icon = <FontAwesomeIcon icon={faTrashCan} className="row__delete" />;

  const removeItemFromCartHandler = () => {
    console.log('remove this item from cart!');
  };

  return (
    <tr className="row">
      <td>
        <img
          src="https://placeimg.com/250/300/people"
          className="row__image"
        ></img>
      </td>
      <td>SOFA</td>
      <td>$69.99</td>
      <td>1</td>
      <td>
        <ShopCartCounter />
      </td>
      <td onClick={removeItemFromCartHandler}>{icon}</td>
    </tr>
  );
};

export default CartItem;
