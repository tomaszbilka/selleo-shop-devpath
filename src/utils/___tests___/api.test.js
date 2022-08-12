import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios, { delayResponse: 1500 });

const testingProducts = [
  {
    id: 1,
    name: 'sofa',
    inStock: 5,
    number_of_items: 0,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'chair',
    inStock: 8,
    number_of_items: 0,
    isFavorite: false,
  },
];

mock.onGet('/products').reply(200, {
  products: testingProducts,
});

describe('api tests', () => {
  test('get test', async () => {
    const response = await axios.get('/products');
    expect(response.data.products).toEqual(testingProducts);
  });
});
