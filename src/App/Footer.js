import React from 'react';
import { createUseStyles } from 'react-jss'

import ContactUs from '../ContactUs';

const useStyles = createUseStyles({
  root: {
    padding: '0 10%',
    marginTop: 50,
  },
}, { name: 'Footer' });

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <ContactUs />
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
