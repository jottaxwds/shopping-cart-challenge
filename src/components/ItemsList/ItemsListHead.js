import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.scss';

const ItemsListHead = ({ colsInfo }) => (
  <ul className="ItemsList ItemsList__head">
    <li data-testid="head-row" className="ItemsList__headings ItemsList__row">
      {colsInfo.map(({ colId, colText }) => (
        <div key={`col_${colId}`} className={`Cell Heading__${colId}`}>
          {colText}
        </div>
      ))}
    </li>
  </ul>
);

ItemsListHead.propTypes = {
  colsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      colId: PropTypes.string.isRequired,
      colText: PropTypes.string.isRequired
    }).isRequired
  )
};

export default ItemsListHead;
