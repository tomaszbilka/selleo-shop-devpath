import App from 'App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import userEvent from '@testing-library/user-event';

const myApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

describe('Router tests', () => {
  test('displays Home page', () => {
    render(myApp);

    const text = screen.getByRole('link', { name: /logo/i });
    expect(text).toBeInTheDocument;
  });

  test('display contact Page', async () => {
    render(myApp);
    userEvent.click(screen.getByRole('link', { name: 'Contact' }));
    const text = await screen.findByText('Get In Touch');
    expect(text).toBeInTheDocument;
  });
});
