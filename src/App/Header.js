import React from 'react';
import { createUseStyles } from 'react-jss'

import UserInfo from '../UserInfo';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: 50,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}, { name: 'Header' });

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.title}>Leanpub</div>
      <div className={classes.user}><UserInfo /></div>
    </header>
  );
};

export default Header;
