import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import UserCard from '../../../../../../UserCard';

const useStyles = createUseStyles({
  root: {
    margin: '10px 0px',
  },
  information: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
}, { name: 'AuthorCard' });

const AuthorCard = ({ author }) => {
  if (!author)
    return <div>Empty author</div>;

  const classes = useStyles();

  const { 
    fullName,
    email,
    avatar,
    information,
  } = author;
  
  return (
    <div className={classes.root}>
      <UserCard fullName={fullName} email={email} avatar={avatar} />
      <h6 className={classes.information}>{information}</h6>
    </div>
  );
};

AuthorCard.propTypes = {
  author: PropTypes.exact({
    fullName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    information: PropTypes.string
  })
};

export default AuthorCard;
