import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ItemsList from './ItemsList';
import { CheckoutContext } from '../../context';

describe('ItemsList unit test:', () => {
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
          quantity: 0
        }
      ]
    },
    product: {}
  };

  it('Should call onShowDetails when product-title is clicked', () => {
    const mockOnShowDetails = jest.fn();
    const { getByTestId } = render(
      <CheckoutContext.Provider
        value={{ state: mockedState, dispatch: () => {} }}
      >
        <ItemsList onShowDetails={mockOnShowDetails} />
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
        <ItemsList onShowDetails={mockOnShowDetails} />
      </CheckoutContext.Provider>
    );
    fireEvent.click(getByTestId('product-image'));
    expect(mockOnShowDetails).toHaveBeenCalled();
  });
});
