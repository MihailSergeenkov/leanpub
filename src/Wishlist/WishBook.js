import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import WishlistContext from '../WishlistContext';

const WishBook = ({ book }) => {
  const { removeBook } = useContext(WishlistContext);

  return (
    <div>
      {book.name}
      <button onClick={removeBook(book.name)}>Remove</button>
    </div>
  );
};

WishBook.propTypes = {
  book: PropTypes.object,
};

export default WishBook;
