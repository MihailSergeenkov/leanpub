import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom';

import AuthorsList from '../AuthorsList';
import AdditionalInfoModal from '../AdditionalInfoModal';
import WishlistContext from '../WishlistContext';

const useStyles = createUseStyles({
  root: {
    margin: '0px 20px',
    maxWidth: 200,
  },
  title: {
    margin: '10px 0px'
  },
  description: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
}, { name: 'GeneralInfo' });

const GeneralInfo = ({ 
  bookId,
  name,
  description,
  authors,
  readers,
  additionalInfo,
}) => {
  const classes = useStyles();
  const { addBook: addBookToWishlist } = useContext(WishlistContext);

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>
        <Link to={`/books/${bookId}`}>{name}</Link>
      </h3>
      <h6 className={classes.description}>{description}</h6>
      {readers > 1000 && <h6>Popular book</h6>}
      <AdditionalInfoModal text={additionalInfo} />
      <button onClick={addBookToWishlist(name)}>Add wishlist</button>
      <AuthorsList authors={authors} />
    </div>
  );
};

GeneralInfo.propTypes = {
  bookId: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.array,
  readers: PropTypes.number,
  additionalInfo: PropTypes.string
};

export default GeneralInfo;
