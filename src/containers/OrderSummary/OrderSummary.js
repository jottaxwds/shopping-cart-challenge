import React from 'react';

import './OrderSummary.scss';

import SectionTitle from './../../components/SectionTitle';
import Button from './../../components/Button';

const OrderSummary = () => (
  <aside className="Summary">
    <SectionTitle>Order Summary</SectionTitle>
    <Button extraClassNames={'Button__submit'}>Checkout</Button>
  </aside>
);

export default OrderSummary;
