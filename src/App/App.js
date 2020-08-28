import React, { useState } from 'react';
import { ThemeProvider } from 'react-jss';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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
      <Header />
      <Main handleChangeTheme={handleChangeTheme} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
