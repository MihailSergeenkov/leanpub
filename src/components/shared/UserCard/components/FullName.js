import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    margin: 0,
  },
}, { name: 'FullName' });

const FullName = ({ fullName, email }) => {
  const classes = useStyles();

  return (
    <h4 className={classes.root}>
      {
        email ? (
          <a href={`mailto:${email}`}>{fullName}</a>
        ) : (
            <div>{fullName}</div>
          )
      }
    </h4>
  );
};

FullName.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
};

export default FullName;
