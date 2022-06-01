import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const CartCounter = ({ multiplier }) => {
  const [amount, setAmount] = useState(1);

  const increaseAmountHandler = () => {
    setAmount((prevAmount) => (prevAmount += 1));
  };

  const decreaseAmountHandler = () => {
    if (amount === 1) {
      return;
    }
    setAmount((prevAmount) => (prevAmount -= 1));
  };

  useEffect(() => {
    multiplier(amount);
  }, [amount]);

  return (
    <div className="counter">
      <button className="counter__left" onClick={decreaseAmountHandler}>
        {'-'}
      </button>
      <div className="counter__amount">{amount}</div>
      <button className="counter__right" onClick={increaseAmountHandler}>
        {'+'}
      </button>
    </div>
  );
};

CartCounter.propTypes = {
  multiplier: PropTypes.func.isRequired,
};

export default CartCounter;
