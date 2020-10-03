import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    cursor: 'pointer',
    zIndex: 1000,
    position: 'fixed',
    right: 50,
    bottom: 50,
  },
}, { name: 'ScrollTopButton' });

const ScrollTopButton = () => {
  const classes = useStyles();
  const [currentScroll, setCurrentScroll] = useState(pageXOffset);

  const handleScroll = () => {
    setCurrentScroll(pageYOffset);
  };

  const handleClick = () => {
    window.scrollTo(pageXOffset, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    currentScroll !== 0 && <button className={classes.root} onClick={handleClick}>UP</button>
  );
};

export default ScrollTopButton;
