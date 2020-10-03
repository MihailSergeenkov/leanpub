import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ name }) => (
  <div>{name}</div>
);

Name.propTypes = {
  name: PropTypes.string,
};

export default Name;
