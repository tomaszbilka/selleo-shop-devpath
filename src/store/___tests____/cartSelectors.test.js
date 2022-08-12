import {
  getAllCartItems,
  getNumberOfItemsInCart,
  getSumOfItemsCost,
} from 'store/cart/selectors';

describe('test selectors of cart slice', () => {
  test('should get all carts from items array', () => {
    const initialState = {
      categories: {},
      products: {},
      appState: {},
      cart: {
        items: [
          { id: 1, name: 'sofa', price: '199' },
          { id: 2, name: 'bed', price: '201' },
        ],
      },
      addresses: {},
    };
    const expectedResult = [
      { id: 1, name: 'sofa', price: '199' },
      { id: 2, name: 'bed', price: '201' },
    ];
    expect(getAllCartItems(initialState)).toEqual(expectedResult);
  });

  test('should get empty string when state is undefine', () => {
    expect(getAllCartItems(undefined)).toBe('');
  });

  test('should return number of items in cart', () => {
    const initialState = {
      categories: {},
      products: {},
      appState: {},
      cart: {
        items: [
          { id: 1, name: 'sofa', price: '199' },
          { id: 2, name: 'bed', price: '201' },
        ],
      },
      addresses: {},
    };
    const expectedResult = 2;
    expect(getNumberOfItemsInCart(initialState)).toBe(expectedResult);
  });

  test('should return empty string when number of items is undefined', () => {
    expect(getNumberOfItemsInCart(undefined)).toBe('');
  });

  test('should return sum of all items prices', () => {
    const initialState = {
      categories: {},
      products: {},
      appState: {},
      cart: {
        items: [
          { id: 1, name: 'sofa', price: '199', number_of_items: '1' },
          { id: 2, name: 'bed', price: '201', number_of_items: '1' },
        ],
      },
      addresses: {},
    };
    const expectedResult = 400;
    expect(getSumOfItemsCost(initialState)).toBe(expectedResult);
  });

  test('should return empty string when items is undefined', () => {
    expect(getSumOfItemsCost(undefined)).toBe('');
  });
});
