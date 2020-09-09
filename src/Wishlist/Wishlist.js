import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import WishlistContext from '../WishlistContext';
import WishBook from './WishBook';

const Wishlist = () => {
  const { books } = useContext(WishlistContext);

  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <p>Wishlist</p>
      {
        books.map((book) => (
          <div key={book.name}>
            <WishBook book={book} />
          </div>
        )) 
      }
    </div>
  );
};

export default Wishlist;
