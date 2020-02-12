import React from 'react';
import PropTypes from 'prop-types';

import './TotalLine.scss';

const TotalLine = ({ totalValue, currency }) => (
  <ul className="TotalLine">
    <li className="TotalLine__element">
      <span className="TotalLine__title">Total cost</span>
      <span data-testid="total-line-price" className="TotalLine__price">
        {totalValue} {currency}
      </span>
    </li>
  </ul>
);

TotalLine.defaultProps = {
  totalValue: 0
};

TotalLine.propTypes = {
  totalValue: PropTypes.number,
  currency: PropTypes.string.isRequired
};

export default TotalLine;
