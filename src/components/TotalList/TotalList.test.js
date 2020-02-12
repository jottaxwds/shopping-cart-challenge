import React from 'react';
import { render } from '@testing-library/react';
import TotalList from './TotalList';

describe('TotalList unit tests ->', () => {
  const defaultProps = {
    totalItems: 10,
    totalValue: 100,
    currency: '€'
  };
  describe('Items representation behavior:', () => {
    it('Should display given items:', () => {
      const { getByTestId } = render(<TotalList {...defaultProps} />);
      expect(getByTestId('totallist-items').textContent).toEqual('10 items');
    });

    it('Should display "item" if there is only one item in total:', () => {
      const { getByTestId } = render(
        <TotalList {...defaultProps} totalItems={1} />
      );
      expect(getByTestId('totallist-items').textContent).toEqual('1 item');
    });

    it('Should display "items" if there are 0 items in total:', () => {
      const { getByTestId } = render(
        <TotalList {...defaultProps} totalItems={0} />
      );
      expect(getByTestId('totallist-items').textContent).toEqual('0 items');
    });

    it('Should display "items" if there are more than one items in total:', () => {
      const { getByTestId } = render(<TotalList {...defaultProps} />);
      expect(getByTestId('totallist-items').textContent).toEqual('10 items');
    });
  });

  describe('Total value behavior:', () => {
    it('Should display given total value and its currency:', () => {
      const { getByTestId } = render(<TotalList {...defaultProps} />);
      expect(getByTestId('totallist-price').textContent).toEqual('100 €');
    });
  });
});
