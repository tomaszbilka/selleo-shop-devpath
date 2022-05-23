import { useState } from 'react';

const ShopCartCounter = () => {
  const [amount, setAmount] = useState(1);

  const amountDecrementHandler = () => {
    if (amount === 1) {
      return;
    }
    setAmount((prev) => (prev -= 1));
  };

  const amountIncrementHandler = () => {
    setAmount((prev) => (prev += 1));
  };

  return (
    <div className="amount">
      <button className="amount__decrement" onClick={amountDecrementHandler}>
        -
      </button>
      <div className="amount__total">{amount}</div>
      <button className="amount__increment" onClick={amountIncrementHandler}>
        +
      </button>
    </div>
  );
};

export default ShopCartCounter;
