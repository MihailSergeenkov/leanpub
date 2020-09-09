import React from 'react';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import { waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import MainBooks from '../src/App/MainBooks';

const theme = {
  backgroundColor: 'white',
};

const handleChangeTheme = jest.fn();

test('page title', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <MainBooks handleChangeTheme={handleChangeTheme} />
      </Router>
    </ThemeProvider>
  );

  await waitFor(() => expect(document.title).toEqual('Books list'));
});
