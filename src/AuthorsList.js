import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import AuthorCard from './AuthorCard';

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
}, { name: 'AuthorsList' });

const AuthorsList = ({ authors }) => {
  if (!authors)
    return <div>Empty authors</div>;

  const classes = useStyles();
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const showedAuthors = 
    showAll ? authors : authors.slice(0, 3);

  return (
    <div className={classes.root}>
      {
        showedAuthors.map((author) => (
          <div key={author.email}>
            <AuthorCard author={author} />
          </div>
        ))
      }
      <button onClick={toggleShowAll}>Show all</button>
    </div>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array,
};

export default AuthorsList;
