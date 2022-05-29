import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart, removeOneItemFromCart } from 'store/cart';

const ShopCartCounter = ({ product }) => {
  const dispatch = useDispatch();
  const { number_of_items, id } = product;

  const amountDecrementHandler = () => {
    dispatch(removeOneItemFromCart(id));
  };

  const amountIncrementHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="amount">
      <button className="amount__decrement" onClick={amountDecrementHandler}>
        -
      </button>
      <div className="amount__total">{number_of_items}</div>
      <button className="amount__increment" onClick={amountIncrementHandler}>
        +
      </button>
    </div>
  );
};

ShopCartCounter.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShopCartCounter;
