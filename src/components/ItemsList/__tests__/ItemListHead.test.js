import React from 'react';
import { render } from '@testing-library/react';
import ItemsListHead from './../ItemsListHead';

describe('ItemsListHead unit tests:', () => {
  const colsInfoExample = [
    { colId: 'product', colText: 'PRODUCT DETAILS' },
    { colId: 'quantity', colText: 'QUANTITY' }
  ];

  const defaultProps = {
    colsInfo: colsInfoExample
  };

  const { getByTestId } = render(<ItemsListHead {...defaultProps} />);
  const row = getByTestId('head-row');

  it('Should show as much columns as provided by props:', () => {
    expect(row.childElementCount).toEqual(2);
  });

  it('Should show colText for each given column:', () => {
    expect(row.children[0].textContent).toEqual('PRODUCT DETAILS');
  });

  it('ClassNames should include "Heading__" prefix and ends by its column Id:', () => {
    expect(row.children[0].classList[1]).toEqual('Heading__product');
  });
});
