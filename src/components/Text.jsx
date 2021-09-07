import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => (
  <p>{children}</p>
);

Text.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Text;
