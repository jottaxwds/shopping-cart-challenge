import React from 'react';
import PropTypes from 'prop-types';

import './DiscountsList.scss';

const DiscountsList = ({ appliedDiscounts, currency }) => (
  <div className="Discounts">
    <h2 className="Discounts__title">DISCOUNTS</h2>
    <ul data-testid="discounts-list" className="Discounts__list">
      {appliedDiscounts.map(({ description, discount }) => (
        <li
          key={`disc-${description.split(' ').join('')}`}
          data-testid="discount-item"
          className="Discounts__item"
        >
          <span
            data-testid="discount-item-description"
            className="Discounts__description"
          >{`${description}`}</span>
          <span
            data-testid="discount-item-value"
            className="Discounts__value"
          >{`${discount > 0 ? '-' + discount : discount} ${currency}`}</span>
        </li>
      ))}
    </ul>
  </div>
);

DiscountsList.propTypes = {
  appliedDiscounts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      discount: PropTypes.number
    }).isRequired
  ).isRequired,
  currency: PropTypes.string.isRequired
};

export default DiscountsList;
