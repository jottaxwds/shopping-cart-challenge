import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import OrderSummary from './OrderSummary';
import { CheckoutContext } from '../../context';

describe('OrderSummary unit test:', () => {
  const mockedState = {
    currency: '€',
    checkout: {
      summary: [
        {
          image: '/img/shirt.png',
          name: 'Lana T-Shirt',
          description: 'Description of the product',
          code: 'X7R2OPX',
          priceUnit: 20.0,
          quantity: 2
        }
      ],
      discounts: [],
      totalSummaryItems: 2,
      totalSummary: 40,
      total: 40
    },
    product: {}
  };

  it('Should call onCheckout when OrderSummary-cta is clicked', () => {
    const mockOnCheckout = jest.fn();
    const { getByText } = render(
      <CheckoutContext.Provider
        value={{ state: mockedState, dispatch: () => {} }}
      >
        <OrderSummary onCheckout={mockOnCheckout} />
      </CheckoutContext.Provider>
    );
    fireEvent.click(getByText('Checkout'));
    expect(mockOnCheckout).toHaveBeenCalled();
  });
});
