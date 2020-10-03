import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { Helmet } from 'react-helmet';

import BookCard from '../../../shared/BookCard';
import ThemingPanel from './ThemingPanel';
import useFetchBooks from '../../../shared/hooks/useFetchBooks';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'Books' });

const Books = ({ handleChangeTheme }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const books = useFetchBooks();

  return (
    <main className={classes.root}>
      <Helmet>
        <title>Books list</title>
      </Helmet>
      <ThemingPanel handleChangeTheme={handleChangeTheme} />
      {
        books.map((book) => (
          <div key={book.id}>
            <BookCard
              book={book}
              isLoading={!book}
            />
          </div>
        ))
      }
    </main>
  );
};

Books.propTypes = {
  handleChangeTheme: PropTypes.func,
};

export default Books;
