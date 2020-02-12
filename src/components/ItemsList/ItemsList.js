import React from 'react';

import './ItemList.scss';

import ItemsListContent from './ItemsListContent';
import ItemsListHead from './ItemsListHead';

const itemsExample = [
  {
    image: '/img/shirt.png',
    name: 'Shirt',
    code: 'X7R2OPX',
    quantity: 3,
    priceValueUnit: 20,
    priceCurrencyUnit: '€'
  }
];

const colsInfoExample = [
  { colId: 'product', colText: 'PRODUCT DETAILS' },
  { colId: 'quantity', colText: 'QUANTITY' },
  { colId: 'price', colText: 'PRICE' },
  { colId: 'total', colText: 'TOTAL' }
];

const ItemsList = () => (
  <>
    <ItemsListHead colsInfo={colsInfoExample} />
    <ItemsListContent
      itemsInfo={itemsExample}
      onUpdateShoppingCart={() => {}}
      showDetails={() => {}}
    />
  </>
);

export default ItemsList;