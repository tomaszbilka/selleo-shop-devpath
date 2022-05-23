import CartControl from '../CartControl';
import CartItem from '../CartItem';

const cartItems = [1, 2];

const ShopCart = () => {
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
              <th className="table__title">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <tr className="table__total">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="table__total__row">
                <div>
                  TOTAL: <span className="table__total__amount">$1000</span>
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
