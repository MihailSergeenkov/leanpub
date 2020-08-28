import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, value, handleChange }) => (
  <>
    <label>{label}</label>
    <input type='text' value={value} onChange={handleChange} />
  </>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
