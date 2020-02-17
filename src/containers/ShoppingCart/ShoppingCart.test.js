import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ShoppingCart from './ShoppingCart';
import { CheckoutContext } from '../../context';

describe('ShoppingCart unit test -> ', () => {
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
    product: {
      image: '/img/shirt.png',
      name: 'Lana T-Shirt',
      description: 'Description of the product',
      code: 'X7R2OPX',
      priceUnit: 20.0,
      quantity: 2
    }
  };

  it('Should call onShowDetails when product-title is clicked', () => {
    const mockOnShowDetails = jest.fn();
    const { getByTestId } = render(
      <CheckoutContext.Provider
        value={{ state: mockedState, dispatch: () => {} }}
      >
        <ShoppingCart onShowDetails={mockOnShowDetails} />
      </CheckoutContext.Provider>
    );
    fireEvent.click(getByTestId('product-title'));
    expect(mockOnShowDetails).toHaveBeenCalled();
  });

  it('Should call onShowDetails when product-image is clicked', () => {
    const mockOnShowDetails = jest.fn();
    const { getByTestId } = render(
      <CheckoutContext.Provider
        value={{ state: mockedState, dispatch: () => {} }}
      >
        <ShoppingCart onShowDetails={mockOnShowDetails} />
      </CheckoutContext.Provider>
    );
    fireEvent.click(getByTestId('product-image'));
    expect(mockOnShowDetails).toHaveBeenCalled();
  });
});
