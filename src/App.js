import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

class App extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <div>
        <BookCard book={book} />
      </div>
    );
  }
}

App.propTypes = {
  book: PropTypes.object
};

export default App;