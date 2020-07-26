import React from 'react';
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

export default App;