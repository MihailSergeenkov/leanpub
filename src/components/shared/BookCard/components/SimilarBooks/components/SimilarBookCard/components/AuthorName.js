import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
}, { name: 'AuthorName' });

const AuthorName = ({ author }) => {
  const classes = useStyles();

  return (
    <h6 className={classes.root}>{author}</h6>
  );
};

AuthorName.propTypes = {
  author: PropTypes.string,
};

export default AuthorName;
