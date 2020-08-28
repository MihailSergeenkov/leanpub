import React from 'react';
import { createUseStyles } from 'react-jss'

import BookCard from '../BookCard';
import useFetchBook from '../hooks/useFetchBook';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
  },
}, { name: 'Main' });

const Main = () => {
  const classes = useStyles();
  const { book, similarBooks } = useFetchBook();

  return (
    <main className={classes.root}>
      <BookCard
        book={book}
        similarBooks={similarBooks}
        isLoading={!book}
      />
    </main>
  );
};

export default Main;
