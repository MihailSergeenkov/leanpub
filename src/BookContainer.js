import React from 'react';

import BookCard from './BookCard';
import Axios from 'axios';

const API_TOKEN = 'keyjnhfZY4RsMqkWT';

const httpClient = Axios.create({
  baseURL: 'https://api.airtable.com/v0/appskzwlULQeX6my9',
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  },
});

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      similarBooks: null,
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { book, similarBooks } = this.state;

    return (
      book ? 
        <BookCard book={book} similarBooks={similarBooks} />
        : <div>Loading...</div>
    );
  }

  _fetchData() {
    httpClient
      .get('/books/rectvnNGWsIE6Z0zc')
      .then(result => result.data)
      .then(this._mapFromAirTable)
      .then((result) => {
        this.setState({
          book: result[0],
          similarBooks: result[1],
        })
      });
  }

  _mapFromAirTable(data) {
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

    const authors = attrs.authors.map(
      (_, index) => ({
        fullName: authorsFullNames[index],
        email: authorsEmails[index],
        avatar: authorsAvatars[index],
        information: authorsInformations[index],
      })
    );

    const similarBooks = attrs.similarBooks.map(
      (_, index) => ({
        name: similarBooksNames[index],
        author: similarBooksAuthors[index],
        image: similarBooksImages[index],
      })
    )

    return [{ 
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
  }
}

export default BookContainer;
