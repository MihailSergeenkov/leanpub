import React from 'react';
import PropTypes from 'prop-types';

const DontShowButton = ({ handleClick }) => (
  <button onClick={handleClick}>Don&apos;t show</button>
);

DontShowButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DontShowButton;
