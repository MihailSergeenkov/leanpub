import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import WishlistContext from '../Contexts/WishlistContext';

const WishlistProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    localStorage.getItem('wishlist') || localStorage.setItem('wishlist', JSON.stringify([]));
    setBooks(JSON.parse(localStorage.getItem('wishlist')));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(books));
  }, [books]);

  const addBook = (bookName) => {
    return () => {
      const exist = (element) => element.name == bookName;

      if (!books.some(exist)) {
        setBooks([...books, { name: bookName }]);
      }
    };
  };

  const removeBook = (bookName) => {
    return () => {
      setBooks(
        books.filter((book) => (
          book.name !== bookName
        ))
      );
    };
  };

  const context = {
    addBook,
    removeBook,
    books: books,
  };

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.any,
};

export default WishlistProvider;
