import React from 'react';
import { render } from '@testing-library/react';
import DiscountsList from './DiscountsList';

describe('DiscountsList unit tests ->', () => {
  const appliedDiscountsExample = [
    {
      description: '2x1 Mug offer',
      discount: -10
    },
    {
      description: 'x3 Shirt offer',
      discount: -3
    },
    {
      description: 'Promo code',
      discount: 0
    }
  ];

  const currency = '€';

  const defaultProps = {
    appliedDiscounts: appliedDiscountsExample,
    currency
  };

  it('Should display all given discounts:', () => {
    const { queryAllByTestId } = render(<DiscountsList {...defaultProps} />);
    expect(queryAllByTestId('discount-item').length).toEqual(3);
  });

  it('Should display description of the applied discount:', () => {
    const { queryAllByTestId } = render(<DiscountsList {...defaultProps} />);
    expect(
      queryAllByTestId('discount-item-description')[0].textContent
    ).toEqual('2x1 Mug offer');
  });

  it('Should display applied discount with currency:', () => {
    const { queryAllByTestId } = render(<DiscountsList {...defaultProps} />);
    expect(queryAllByTestId('discount-item-value')[0].textContent).toEqual(
      '-10 €'
    );
  });
});
