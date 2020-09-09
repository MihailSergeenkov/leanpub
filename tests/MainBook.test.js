import React from 'react';
import { ThemeProvider } from 'react-jss';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import MainBook from '../src/App/MainBook';
import WishlistProvider from '../src/WishlistProvider';
import { useFetchBookFromId } from '../src/hooks/useFetchBooks';

jest.mock('../src/hooks/useFetchBooks');

const theme = {
  backgroundColor: 'white',
};

test('page title', async () => {
  const book = {
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

  render(
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <Router initialEntries={['/books/1']}>
          <Route component={MainBook} path='/books/:id' />
        </Router>
      </WishlistProvider>
    </ThemeProvider>
  );

  await waitFor(() => expect(document.title).toEqual('React+D3v4'));
});
