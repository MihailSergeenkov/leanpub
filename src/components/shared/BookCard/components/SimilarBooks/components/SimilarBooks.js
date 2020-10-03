import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import SimilarBookCard from './SimilarBookCard';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    margin: '10px 0px',
    flexDirection: 'row',
  },
  '@media (min-width: 800px)': {
    root: {
      flexDirection: 'column',
    },
  },
}, { name: 'SimilarBooks' });

const SimilarBooks = ({ similarBooks }) => {
  const classes = useStyles();
  const [books, setBooks] = useState(similarBooks);

  const handleClick = (bookName) => {
    return () => {
      setBooks(
        books.filter((book) => (
          book.name !== bookName
        ))
      );
    };
  };

  return (
    <div className={classes.root}>
      {
        books.slice(0, 3).map((book) => (
          <div key={book.image}>
            <SimilarBookCard book={book} handleClick={handleClick} />
          </div>
        ))
      }
    </div>
  );
};

SimilarBooks.propTypes = {
  similarBooks: PropTypes.array,
};

SimilarBooks.defaultProps = {
  similarBooks: [],
};

export default SimilarBooks;
