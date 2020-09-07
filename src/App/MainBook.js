import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import BookCard from '../BookCard';
import { useFetchBookFromId } from '../hooks/useFetchBooks';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'MainBook' });

const MainBook = ({ match: { params } }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { book, similarBooks } = useFetchBookFromId(params.id);

  return (
    <main className={classes.root}>
      <Helmet>
        <title>
          {book ? book.name : 'Looding...' }
        </title>
      </Helmet>
      <BookCard
        book={book}
        similarBooks={similarBooks}
        isLoading={!book}
      />
    </main>
  );
};

MainBook.propTypes = {
  match: PropTypes.any,
};

export default MainBook;
