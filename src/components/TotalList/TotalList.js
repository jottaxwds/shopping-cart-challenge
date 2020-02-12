import React from 'react';
import PropTypes from 'prop-types';

import './TotalList.scss';

const TotalList = ({ totalItems, totalValue, currency }) => (
  <ul className="TotalList">
    <li className="TotalList__element">
      <span data-testid="totallist-items" className="TotalList__items">
        {totalItems} {totalItems === 1 ? 'item' : 'items'}
      </span>
      <span data-testid="totallist-price" className="TotalList__price">
        {totalValue} {currency}
      </span>
    </li>
  </ul>
);

TotalList.defaultProps = {
  totalItems: 0,
  totalValue: 0
};

TotalList.propTypes = {
  totalItems: PropTypes.number,
  totalValue: PropTypes.number,
  currency: PropTypes.string.isRequired
};

export default TotalList;
