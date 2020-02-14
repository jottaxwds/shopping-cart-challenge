import React from 'react';

import './ShoppingCart.scss';

import SectionTitle from './../../components/SectionTitle';
import ItemsList from './../../components/ItemsList';

const ShoppingCart = () => {
  return (
    <section className="Products">
      <SectionTitle>Shopping Cart</SectionTitle>
      <ItemsList />
    </section>
  );
};

export default ShoppingCart;
