import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, onClick, extraClassNames }) => {
  return (
    <button className={`Button ${extraClassNames}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  extraClassNames: ''
};

Button.propTypes = {
  onClick: PropTypes.func,
  extraClassNames: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;
