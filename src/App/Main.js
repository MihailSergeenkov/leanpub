import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss'

import BookCard from '../BookCard';
import ThemingPanel from './ThemingPanel';
import useFetchBook from '../hooks/useFetchBook';

const useStyles = createUseStyles({
  root: {
    padding: '10px 10%',
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
}, { name: 'Main' });

const Main = ({ handleChangeTheme }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { book, similarBooks } = useFetchBook();

  return (
    <main className={classes.root}>
      <ThemingPanel handleChangeTheme={handleChangeTheme} />
      <BookCard
        book={book}
        similarBooks={similarBooks}
        isLoading={!book}
      />
    </main>
  );
};

Main.propTypes = {
  handleChangeTheme: PropTypes.func,
};

export default Main;
