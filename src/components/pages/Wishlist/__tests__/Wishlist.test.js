import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Wishlist from '../../Wishlist';
import WishlistProvider from '../../../shared/Providers/WishlistProvider';

test('page title', async () => {
  render(
    <WishlistProvider>
      <Router>
        <Wishlist />
      </Router>
    </WishlistProvider>
  );

  await waitFor(() => expect(document.title).toEqual('Wishlist'));
});
