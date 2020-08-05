import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import UserInfo from './UserInfo';
import ContactUs from './ContactUs';

const styles = {
  header: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  main: {
    padding: '10px 10%',
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px',
  },
};

const App = ({ book, similarBooks }) => (
  <>
    <header style={styles.header}>
      <div style={styles.title}>Leanpub</div>
      <div style={styles.user}><UserInfo /></div>
    </header>
    <main style={styles.main}>
      <BookCard book={book} similarBooks={similarBooks} />
    </main>
    <footer style={styles.footer}>
      <ContactUs />
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  </>
);

App.propTypes = {
  book: PropTypes.object,
  similarBooks: PropTypes.array,
};

export default App;
