import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    maxWidth: 50,
  },
  avatar: {
    width: '100%',
  },
  badAvatar: {
    backgroundColor: 'grey',
    width: '100%',
    minHeight: 50,
  },
}, { name: 'Avatar' });

const Avatar = ({ fullName, avatar }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        avatar ? (
          <img className={classes.avatar} src={avatar} alt={fullName} />
        ) : (
            <div className={classes.badAvatar}>Empty avatar</div>
          )
      }
    </div>
  );
};

Avatar.propTypes = {
  fullName: PropTypes.string,
  avatar: PropTypes.string,
};

export default Avatar;
