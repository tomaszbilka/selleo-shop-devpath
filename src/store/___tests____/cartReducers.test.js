import cartReducer, {
  addToCart,
  removeFromCart,
  clearCart,
  removeOneItemFromCart,
} from 'store/cart';

describe('cart reducers tests', () => {
  const initialCartState = {
    items: [],
  };

  test('should handle initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = initialCartState;
    expect(cartReducer(initialCartState, action)).toEqual(expectedState);
  });

  test('add new item to cart', () => {
    const action = addToCart({ id: 1, name: 'sofa', price: '199' });
    const expectedState = {
      items: [{ id: 1, name: 'sofa', price: '199', number_of_items: 1 }],
    };
    expect(cartReducer(initialCartState, action)).toEqual(expectedState);
  });

  test('add second item to cart', () => {
    const initialState = {
      items: [{ id: 1, name: 'sofa', price: '199', number_of_items: 1 }],
    };
    const action = addToCart({ id: 1, name: 'sofa', price: '199' });
    const expectedState = {
      items: [{ id: 1, name: 'sofa', price: '199', number_of_items: 2 }],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  test('should remove item from cart', () => {
    const initialState = {
      items: [
        { id: 1, name: 'sofa', price: '199', number_of_items: 1 },
        { id: 2, name: 'bed', price: '99', number_of_items: 1 },
      ],
    };
    const action = removeFromCart(2);
    const expectedState = {
      items: [{ id: 1, name: 'sofa', price: '199', number_of_items: 1 }],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  test('should clear cart', () => {
    const initialState = {
      items: [
        { id: 1, name: 'sofa', price: '199', number_of_items: 1 },
        { id: 2, name: 'bed', price: '99', number_of_items: 1 },
      ],
    };
    const action = clearCart();
    expect(cartReducer(initialState, action)).toEqual(initialCartState);
  });

  test('should decrease number of items', () => {
    const initialState = {
      items: [
        { id: 1, name: 'sofa', price: '199', number_of_items: 3 },
        { id: 2, name: 'bed', price: '99', number_of_items: 1 },
      ],
    };
    const action = removeOneItemFromCart(1);
    const expectedState = {
      items: [
        { id: 1, name: 'sofa', price: '199', number_of_items: 2 },
        { id: 2, name: 'bed', price: '99', number_of_items: 1 },
      ],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

  test('should not decrease number of items because one left', () => {
    const initialState = {
      items: [
        { id: 1, name: 'sofa', price: '199', number_of_items: 3 },
        { id: 2, name: 'bed', price: '99', number_of_items: 1 },
      ],
    };
    const action = removeOneItemFromCart(2);
    const expectedState = initialState;
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});
