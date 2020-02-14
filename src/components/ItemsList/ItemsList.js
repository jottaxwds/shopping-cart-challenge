import React, { useContext } from 'react';

import { CheckoutContext } from './../../context';

import './ItemList.scss';
import ItemsListContent from './ItemsListContent';
import ItemsListHead from './ItemsListHead';

const head = [
  { colId: 'product', colText: 'PRODUCT DETAILS' },
  { colId: 'quantity', colText: 'QUANTITY' },
  { colId: 'price', colText: 'PRICE' },
  { colId: 'total', colText: 'TOTAL' }
];

const ItemsList = () => {
  const {
    state: {
      currency,
      checkout: { summary }
    },
    dispatch
  } = useContext(CheckoutContext);

  const handleUpdateShoppingCart = ({ type, code, lastValue }) =>
    dispatch({ type, code, lastValue });

  return (
    <>
      <ItemsListHead colsInfo={head} />
      <ItemsListContent
        itemsInfo={summary}
        currency={currency}
        onUpdateShoppingCart={handleUpdateShoppingCart}
        onShowDetails={() => {}}
      />
    </>
  );
};

export default ItemsList;
