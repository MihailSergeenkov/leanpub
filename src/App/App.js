import React, { useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import MainBooks from './MainBooks';
import MainBook from './MainBook';
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
      <Router>
        <Layout>
          <Switch>
            <Route exact render={() => <MainBooks handleChangeTheme={handleChangeTheme} />} path='/' />
            <Route component={MainBook} path='/books/:id' />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider> 
  );
};

export default App;
