import React, { useContext } from 'react';

import { CheckoutContext } from './../../context';

import './OrderSummary.scss';

import SectionTitle from './../../components/SectionTitle';
import Button from './../../components/Button';
import TotalList from './../../components/TotalList';
import TotalLine from './../../components/TotalLine';
import DiscountsList from './../../components/DiscountsList';

const OrderSummary = () => {
  const {
    state: {
      currency,
      checkout: { discounts, totalSummaryItems, totalSummary, totalPrice }
    }
  } = useContext(CheckoutContext);

  return (
    <aside className="Summary">
      <SectionTitle>Order Summary</SectionTitle>
      <TotalList
        totalItems={totalSummaryItems}
        totalValue={totalSummary}
        currency={currency}
      />

      <DiscountsList appliedDiscounts={discounts} currency={currency} />

      <div className="Summary__total-wrapper">
        <TotalLine totalValue={totalPrice} currency={currency} />
        <Button extraClassNames={'Button__submit'}>Checkout</Button>
      </div>
    </aside>
  );
};

export default OrderSummary;
