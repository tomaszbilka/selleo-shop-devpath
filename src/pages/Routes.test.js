import App from 'App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { act } from 'react-dom/test-utils';

const myApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
describe('Router tests', () => {
  test('displays Home page', async () => {
    act(() => {
      render(myApp);
    });

    expect(await screen.findByText('Our Products')).toBeInTheDocument();
  });
});
