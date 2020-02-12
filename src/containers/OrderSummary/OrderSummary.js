import React from 'react';

import './OrderSummary.scss';

import SectionTitle from './../../components/SectionTitle';
import Button from './../../components/Button';
import TotalList from './../../components/TotalList';
import TotalLine from './../../components/TotalLine';
import DiscountsList from './../../components/DiscountsList';

const appliedDiscountsExample = [
  {
    description: '2x1 Mug offer',
    discount: -10,
    currency: '€'
  },
  {
    description: 'x3 Shirt offer',
    discount: -3,
    currency: '€'
  },
  {
    description: 'Promo code',
    discount: 0,
    currency: '€'
  }
];

const OrderSummary = () => (
  <aside className="Summary">
    <SectionTitle>Order Summary</SectionTitle>
    <TotalList totalItems={11} totalValue={120} currency={'€'} />

    <DiscountsList appliedDiscounts={appliedDiscountsExample} />

    <div className="Summary__total-wrapper">
      <TotalLine totalValue={107} currency={'€'} />
      <Button extraClassNames={'Button__submit'}>Checkout</Button>
    </div>
  </aside>
);

export default OrderSummary;
