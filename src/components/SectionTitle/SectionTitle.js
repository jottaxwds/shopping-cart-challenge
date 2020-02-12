import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.scss';

const SectionTitle = ({ children }) => (
  <h1 data-testid="section-title-component" className="Section__main">
    {children}
  </h1>
);

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SectionTitle;
