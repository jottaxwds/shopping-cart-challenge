import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ProductDetails from './ProductDetails';
import { CheckoutContext } from '../../context';

describe('ProductDetails unit test:', () => {
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
    product: {
      image: '/img/shirt.png',
      name: 'Lana T-Shirt',
      description: 'Description of the product',
      code: 'X7R2OPX',
      priceUnit: 20.0,
      quantity: 0
    }
  };

  it('Should call onCloseDetails when Add to cart button is clicked:', () => {
    const mockOnCloseDetails = jest.fn();
    const { getByText } = render(
      <CheckoutContext.Provider
        value={{ state: mockedState, dispatch: () => {} }}
      >
        <ProductDetails onCloseDetails={mockOnCloseDetails} />
      </CheckoutContext.Provider>
    );
    fireEvent.click(getByText('Add to cart'));
    expect(mockOnCloseDetails).toHaveBeenCalled();
  });
});
