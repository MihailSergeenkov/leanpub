import React from 'react';
import PropTypes from 'prop-types';

import AuthorsList from './AuthorsList';
import AdditionalInfoModal from './AdditionalInfoModal';

const styles = {
  root: {
    display: 'flex',
    fontFamily: 'sans-serif',
    margin: '20px',
  },
  cardGeneralInfo: {
    margin: '0px 20px',
    maxWidth: '200px',
  },
  title: {
    margin: '10px 0px'
  },
  description: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
  imageBox: {
    maxWidth: '200px',
  },
  image: {
    width: '100%',
  },
  cardAdditionalInfo: {
    margin: '0px 20px',
    maxWidth: '200px',
  },
};

class BookCard extends React.Component {
  render() {
    if (!this.props.book)
      return <div>Empty book</div>;

    const { 
      book: {
        name,
        description,
        pages,
        language,
        progress,
        link,
        authors,
        minimumPrice,
        suggestedPrice,
        collectedAmount,
        expectedAmount,
        readers,
        additionalInfo
      }
    } = this.props;
  
    return (
      <div style={styles.root}>
        <div style={styles.cardGeneralInfo}>
          <h3 style={styles.title}>{name}</h3>
          <h6 style={styles.description}>{description}</h6>
          {readers > 1000 && <h6>Popular book</h6>}
          <AdditionalInfoModal text={additionalInfo} />
          <AuthorsList authors={authors} />
        </div>
        <div style={styles.imageBox}>
          <img style={styles.image} src={link} alt={name} />
        </div>
        <div style={styles.cardAdditionalInfo}>
          <div>Minimum price: {minimumPrice}</div>
          <div>Suggested price: {suggestedPrice}</div>
          <div>Collected amount: {collectedAmount}</div>
          <div>Expected amount: {expectedAmount}</div>
          <div>Pages: {pages}</div>
          <div>Language: {language}</div>
          <div>Progress: {progress}</div>
          <div>Readers: {readers}</div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.exact({
    name: PropTypes.string,
    description: PropTypes.string,
    pages: PropTypes.string,
    language: PropTypes.string,
    progress: PropTypes.string,
    link: PropTypes.string,
    authors: PropTypes.array,
    minimumPrice: PropTypes.string,
    suggestedPrice: PropTypes.string,
    collectedAmount: PropTypes.string,
    expectedAmount: PropTypes.string,
    readers: PropTypes.number,
    additionalInfo: PropTypes.string
  })
};

export default BookCard;