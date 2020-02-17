import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CheckoutContext } from './../../context';

import './../../components/ItemsList/ItemList.scss';

import { ItemsListContent, ItemsListHead } from './../../components/ItemsList';

const head = [
  { colId: 'product', colText: 'PRODUCT DETAILS' },
  { colId: 'quantity', colText: 'QUANTITY' },
  { colId: 'price', colText: 'PRICE' },
  { colId: 'total', colText: 'TOTAL' }
];

const ItemsList = ({ onShowDetails }) => {
  const {
    state: {
      currency,
      checkout: { summary }
    },
    dispatch
  } = useContext(CheckoutContext);

  const handleUpdateShoppingCart = ({ type, code, lastValue }) =>
    dispatch({ type, code, lastValue });

  const handleOnShowDetails = ({ type, code }) => {
    dispatch({ type, code });
    onShowDetails();
  };

  return (
    <>
      <ItemsListHead colsInfo={head} />
      <ItemsListContent
        itemsInfo={summary}
        currency={currency}
        onUpdateShoppingCart={handleUpdateShoppingCart}
        onShowDetails={handleOnShowDetails}
      />
    </>
  );
};
ItemsList.defaultProps = {
  onShowDetails: () => {}
};

ItemsList.propTypes = {
  onShowDetails: PropTypes.func
};

export default ItemsList;
