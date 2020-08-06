import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ minimumPrice, currentPay, handleChange }) => (
  <input 
    type='number' 
    min={minimumPrice} 
    value={currentPay}
    onChange={handleChange}
  />
);

Input.propTypes = {
  minimumPrice: PropTypes.number,
  currentPay: PropTypes.number,
  handleChange: PropTypes.func,
};

export default Input;
