import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AuthorCard from './AuthorCard';

const styles = {
  root: {
    margin: '10px 0px',
  },
};

const AuthorsList = ({ authors }) => {
  if (!authors)
    return <div>Empty authors</div>;

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const showedAuthors = 
    showAll ? authors : authors.slice(0, 3);

  return (
    <div style={styles.root}>
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
