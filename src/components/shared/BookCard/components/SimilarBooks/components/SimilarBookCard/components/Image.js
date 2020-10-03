import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    maxWidth: 50,
  },
  image: {
    width: '100%',
  },
}, { name: 'Image' });

const Image = ({ alt, src }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
