import React from 'react';
import { render } from '@testing-library/react';
import TotalLine from './TotalLine';

describe('TotalLine unit tests ->', () => {
  const defaultProps = {
    totalValue: 100,
    currency: '€'
  };
  it('Should display given total price and its currency:', () => {
    const { getByTestId } = render(<TotalLine {...defaultProps} />);
    expect(getByTestId('total-line-price').textContent).toEqual('100 €');
  });
});
