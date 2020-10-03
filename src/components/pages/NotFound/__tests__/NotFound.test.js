import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import NotFound from '../../NotFound';

test('page title', async () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );

  await waitFor(() => expect(document.title).toEqual('Not found'));
});
