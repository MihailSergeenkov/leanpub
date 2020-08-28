import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import Image from './Image';
import BookName from './BookName';
import AuthorName from './AuthorName';
import DontShowButton from './DontShowButton';

const useStyles = createUseStyles({
  root: {
    margin: '10px 0px',
  },
}, { name: 'SimilarBookCard' });

const SimilarBookCard = ({ book: { name, author, image }, handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image alt={name} src={image} />
      <BookName name={name} />
      <AuthorName author={author} />
      <DontShowButton handleClick={handleClick(name)} />
    </div>
  );
};

SimilarBookCard.propTypes = {
  book: PropTypes.exact({
    name: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
  }),
  handleClick: PropTypes.func,
};

export default SimilarBookCard;
