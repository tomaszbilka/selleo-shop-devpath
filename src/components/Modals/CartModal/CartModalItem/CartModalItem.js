import ShopCartCounter from 'components/Cart/ShopCartCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartModalItem = () => {
  const icon = <FontAwesomeIcon icon={faTrashCan} />;

  const deleteItemHandler = () => {
    console.log('delete item');
  };

  return (
    <>
      <div className="cart-modal-item">
        <img
          src="https://placeimg.com/250/300/people"
          className="cart-modal-item__image"
        />
        <div className="cart-modal-item__wrap">
          <h3 className="cart-modal-item__title">sofa</h3>
          <p className="cart-modal-item__text">
            <span>1</span>x
            <span className="cart-modal-item__amount">$199.9</span>
          </p>
          <ShopCartCounter />
        </div>
        <button className="cart-modal-item__delete" onClick={deleteItemHandler}>
          {icon}
        </button>
      </div>
      <hr className="cart-modal-item__bottom-line" />
    </>
  );
};

export default CartModalItem;
