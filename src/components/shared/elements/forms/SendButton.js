import React from 'react';
import PropTypes from 'prop-types';

const SendButton = ({ handleClick }) => (
  <button onClick={handleClick}>Send</button>
);

SendButton.propTypes = {
  handleClick: PropTypes.func,
};

export default SendButton;
