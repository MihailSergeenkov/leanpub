import React, { useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import MainBooks from './MainBooks';
import MainBook from './MainBook';
import Wishlist from '../Wishlist';
import NotFound from './NotFound';

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
          <Route exact render={() => <MainBooks handleChangeTheme={handleChangeTheme} />} path='/' />
          <Route component={MainBook} path='/books/:id' />
          <Route component={Wishlist} path='/wishlist' />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ThemeProvider> 
  );
};

export default App;
