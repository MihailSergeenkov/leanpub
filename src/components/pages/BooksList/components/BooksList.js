import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Helmet } from 'react-helmet';

import useFetchBooks from '../../../shared/hooks/useFetchBooks';
import deleteBook from '../../../../helpers/deleteBook';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'BooksList' });

const BooksList = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const books = useFetchBooks();

  const handleClick = (bookId) => {
    return () => deleteBook(bookId);
  };

  return (
    <main className={classes.root}>
      <Helmet>
        <title>Books list</title>
      </Helmet>
      <ul>
        {
          books.map((book) => (
            <li key={book.id}>
              {book.name}
              <button onClick={handleClick(book.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </main>
  );
};

export default BooksList;
