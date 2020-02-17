import React, { useContext } from 'react';

import { CheckoutContext } from './../../context';
import PropTypes from 'prop-types';

import './OrderSummary.scss';

import SectionTitle from './../../components/SectionTitle';
import Button from './../../components/Button';
import TotalList from './../../components/TotalList';
import TotalLine from './../../components/TotalLine';
import DiscountsList from './../../components/DiscountsList';

const OrderSummary = ({ onCheckout }) => {
  const {
    state: {
      currency,
      checkout: { discounts, totalSummaryItems, totalSummary, total }
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
        <TotalLine totalValue={total} currency={currency} />
        <Button
          data-testId="OrderSummary-cta"
          extraClassNames={'Button__submit'}
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </div>
    </aside>
  );
};

OrderSummary.defaultProps = {
  onCheckout: () => {}
};

OrderSummary.propTypes = {
  onCheckout: PropTypes.func
};

export default OrderSummary;
