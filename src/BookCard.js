import React from 'react';
import PropTypes from 'prop-types';

import BookCardGeneralInfo from './BookCardGeneralInfo';
import BookCardImage from './BookCardImage';
import BookCardAdditionalInfo from './BookCardAdditionalInfo';

const styles = {
  root: {
    display: 'flex',
    fontFamily: 'sans-serif',
    margin: '20px',
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
        <BookCardGeneralInfo 
          name={name} 
          description={description}
          readers={readers}
          authors={authors}
          additionalInfo={additionalInfo}
        />
        <BookCardImage 
          alt={name} 
          src={link}
        />
        <BookCardAdditionalInfo 
          minimumPrice={minimumPrice} 
          suggestedPrice={suggestedPrice}
          collectedAmount={collectedAmount}
          expectedAmount={expectedAmount}
          pages={pages}
          language={language}
          progress={progress}
          readers={readers}
        />
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
