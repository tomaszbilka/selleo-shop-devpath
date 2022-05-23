import { useState } from 'react';

const CartCounter = () => {
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

export default CartCounter;
