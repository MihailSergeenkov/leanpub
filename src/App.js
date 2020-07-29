import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const styles = {
  header: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  main: {
    padding: '10px 10%',
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px',
  },
};

class App extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <>
        <header style={styles.header}>
          Leanpub
        </header>
        <main style={styles.main}>
          <BookCard book={book} />
        </main>
        <footer style={styles.footer}>
          &copy; {new Date().getFullYear()}
        </footer>
      </>
    );
  }
}

App.propTypes = {
  book: PropTypes.object
};

export default App;