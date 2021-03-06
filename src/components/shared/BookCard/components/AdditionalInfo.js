import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    margin: '0px 20px',
    maxWidth: 200,
  },
}, { name: 'AdditionalInfo' })

const AdditionalInfo = ({ 
  pages,
  language,
  progress,
  minimumPrice,
  suggestedPrice,
  collectedAmount,
  expectedAmount,
  readers,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
};

AdditionalInfo.propTypes = {
  pages: PropTypes.string,
  language: PropTypes.string,
  progress: PropTypes.string,
  minimumPrice: PropTypes.string,
  suggestedPrice: PropTypes.string,
  collectedAmount: PropTypes.string,
  expectedAmount: PropTypes.string,
  readers: PropTypes.number,
};

export default AdditionalInfo;
