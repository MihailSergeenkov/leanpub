import { useState, useEffect } from 'react';
import httpClient from '../lib/airtableClient';

const _fetchBookFromId = (BookId) => (
  httpClient
    .get(`/books/${BookId}`)
    .then(result => result.data)
    .then(_mapBookFromAirTable)
);

const _mapBookFromAirTable = (data) => {
  const id = data.id;
  const attrs = data.fields;

  const {
    name,
    description,
    pages,
    language,
    progress,
    link,
    minimumPrice,
    suggestedPrice,
    collectedAmount,
    expectedAmount,
    readers,
    additionalInfo,
    authorsFullNames,
    authorsEmails,
    authorsAvatars,
    authorsInformations,
    similarBooksNames,
    similarBooksAuthors,
    similarBooksImages,
  } = attrs;

  const authors = attrs.authors && attrs.authors.map(
    (_, index) => ({
      fullName: authorsFullNames[index],
      email: authorsEmails[index],
      avatar: authorsAvatars[index],
      information: authorsInformations[index],
    })
  );

  const similarBooks = attrs.similarBooks && attrs.similarBooks.map(
    (_, index) => ({
      name: similarBooksNames[index],
      author: similarBooksAuthors[index],
      image: similarBooksImages[index],
    })
  )

  return [{
    id,
    name,
    description,
    pages,
    language,
    progress,
    link,
    minimumPrice,
    suggestedPrice,
    collectedAmount,
    expectedAmount,
    readers,
    additionalInfo,
    authors,
  }, similarBooks];
};

export const useFetchBookFromId = (BookId) => {
  const [
    bookWithSimilarBooks,
    setBookWithSimilarBooks,
  ] = useState({
    book: null,
    similarBooks: null,
  });

  useEffect(() => {
    _fetchBookFromId(BookId)
      .then((result) => {
        setBookWithSimilarBooks({
          book: result[0],
          similarBooks: result[1],
        })
      })
  }, [BookId, bookWithSimilarBooks]);

  return bookWithSimilarBooks;
};

const _fetchBooks = () => (
  httpClient
    .get('/books')
    .then(result => result.data)
    .then(_mapBooksFromAirTable)
);

const _mapBooksFromAirTable = ({ records }) => {
  return records.map((record) => {
    const id = record.id;
    const attrs = record.fields;
    const {
      name,
      description,
      pages,
      language,
      progress,
      link,
      minimumPrice,
      suggestedPrice,
      collectedAmount,
      expectedAmount,
      readers,
      additionalInfo,
      authorsFullNames,
      authorsEmails,
      authorsAvatars,
      authorsInformations,
    } = attrs;

    const authors = attrs.authors.map(
      (_, index) => ({
        fullName: authorsFullNames[index],
        email: authorsEmails[index],
        avatar: authorsAvatars[index],
        information: authorsInformations[index],
      })
    );

    return {
      id,
      name,
      description,
      pages,
      language,
      progress,
      link,
      minimumPrice,
      suggestedPrice,
      collectedAmount,
      expectedAmount,
      readers,
      additionalInfo,
      authors,
    };
  })
};

const useFetchBooks = () => {
  const [
    books, 
    setBooks,
  ] = useState([]);

  useEffect(() => {
    _fetchBooks()
      .then((result) => {
        setBooks(result)
      })
  }, [books]);

  return books;
};

export default useFetchBooks;
