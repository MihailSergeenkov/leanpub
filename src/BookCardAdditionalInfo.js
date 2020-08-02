import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '0px 20px',
    maxWidth: '200px',
  },
};

class BookCardAdditionalInfo extends React.Component {
  render() {
    const { 
      pages,
      language,
      progress,
      minimumPrice,
      suggestedPrice,
      collectedAmount,
      expectedAmount,
      readers,
    } = this.props;
  
    return (
      <div style={styles.root}>
        <div>Minimum price: {minimumPrice}</div>
        <div>Suggested price: {suggestedPrice}</div>
        <div>Collected amount: {collectedAmount}</div>
        <div>Expected amount: {expectedAmount}</div>
        <div>Pages: {pages}</div>
        <div>Language: {language}</div>
        <div>Progress: {progress}</div>
        <div>Readers: {readers}</div>
      </div>
    );
  }
}

BookCardAdditionalInfo.propTypes = {
  pages: PropTypes.string,
  language: PropTypes.string,
  progress: PropTypes.string,
  minimumPrice: PropTypes.string,
  suggestedPrice: PropTypes.string,
  collectedAmount: PropTypes.string,
  expectedAmount: PropTypes.string,
  readers: PropTypes.number,
};

export default BookCardAdditionalInfo;
