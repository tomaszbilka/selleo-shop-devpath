import { useSelector } from 'react-redux';
import { getAllCartItems } from 'store/cart/selectors';
import { getSumOfItemsCost } from 'store/cart/selectors';
import CartControl from '../CartControl';
import CartItem from '../CartItem';

const ShopCart = () => {
  const cartItems = useSelector(getAllCartItems);
  const totalCost = useSelector(getSumOfItemsCost);

  let cartContent = (
    <tr>
      <td colSpan="7" className="table__info">
        <p>No product yet!</p>
      </td>
    </tr>
  );

  if (cartItems.length > 0) {
    cartContent = cartItems.map((item, index) => (
      <CartItem key={index} product={item} />
    ));
  }

  return (
    <section className="shop-cart-container">
      <div className="table-scroll-wrap">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th className="table__title">IMAGE</th>
              <th className="table__title">PRODUCT NAME</th>
              <th className="table__title">PRICE</th>
              <th className="table__title">QTY</th>
              <th className="table__title">SUBTOTAL</th>
              <th className="table__title">SUM</th>
              <th className="table__title">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {cartContent}
            <tr className="table__total">
              <td colSpan="7" className="table__row">
                <div>
                  TOTAL:{' '}
                  <span className="table__amount">${totalCost / 100}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CartControl />
    </section>
  );
};

export default ShopCart;
