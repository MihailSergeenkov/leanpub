import React, { useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Books from '../../../pages/Books';
import NewBook from '../../../pages/NewBook';
import BooksList from '../../../pages/BooksList';
import EditBook from '../../../pages/EditBook';
import Book from '../../../pages/Book';
import Wishlist from '../../../pages/Wishlist';
import NotFound from '../../../pages/NotFound';

const themes = {
  default: {
    backgroundColor: 'white',
  },
  new: {
    backgroundColor: 'lemonchiffon',
  },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleChangeTheme = (themeName) => {
    return () => {
      setCurrentTheme(themeName);
    };
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Layout>
        <Switch>
          <Route exact render={() => <Books handleChangeTheme={handleChangeTheme} />} path='/' />
          <Route component={NewBook} path='/books/new' />
          <Route component={BooksList} path='/books/list' />
          <Route component={EditBook} path='/books/:id/edit' />
          <Route component={Book} path='/books/:id' />
          <Route component={Wishlist} path='/wishlist' />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ThemeProvider> 
  );
};

export default App;
