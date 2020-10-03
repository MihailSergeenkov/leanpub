import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from '../../App';
import AuthContext from '../../../shared/Contexts/AuthContext';
import WishlistProvider from '../../../shared/Providers/WishlistProvider';
import useFetchBooks, { useFetchBookFromId } from '../../../shared/hooks/useFetchBooks';

jest.mock('../../../shared/hooks/useFetchBooks');

const book = {
  id: '1',
  name: 'React+D3v4',
  description: 'Reusable dataviz & games using modern JavaScript',
  pages: '249',
  language: 'english',
  progress: '100',
  link: 'https://d2sofvawe08yqg.cloudfront.net/reactd3jses6/hero2x?1549481353',
  minimumPrice: '49.00',
  suggestedPrice: '49.00',
  collectedAmount: '5039.00',
  expectedAmount: '8000.00'
};

useFetchBookFromId.mockReturnValue(
  {
    book,
    similarBooks: [],
  }
);

useFetchBooks.mockReturnValue(
  [book]
);

const user = {
  firstName: 'Swizec',
  lastName: 'Teller',
  email: 'swizec_teller@email.com',
  avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/8250/original/Screen_Shot_2012-04-11_at_10.13.10_AM.png?1450662429',
};

const renderWithRouter = (route) => (
  render(
    <AuthContext.Provider value={{ currentUser: user }}>
      <WishlistProvider>
        <Router initialEntries={[route]}>
          <App />
        </Router>
      </WishlistProvider>
    </AuthContext.Provider>
  )
);

test('render main books page', async () => {
  const { container } = renderWithRouter('/');

  expect(container.innerHTML).toMatch('React+D3v4');
});

test('render main book page', async () => {
  const { container } = renderWithRouter('/books/1');

  expect(container.innerHTML).toMatch('React+D3v4');
});

test('render not found page', async () => {
  const { container } = renderWithRouter('/qwerty');

  expect(container.innerHTML).toMatch('Ooops, page not found');
});

test('render main book page', async () => {
  const { container } = renderWithRouter('/wishlist');

  expect(container.innerHTML).toMatch('Wishlist');
});
