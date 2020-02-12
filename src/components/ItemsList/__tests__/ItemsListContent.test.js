import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemsListContent from './../ItemsListContent';

describe('ItemsListContent unit tests:', () => {
  const itemsExample = [
    {
      image: '/img/shirt.png',
      name: 'Shirt',
      code: 'X7R2OPX',
      quantity: 3,
      priceValueUnit: 20,
      priceCurrencyUnit: '€'
    }
  ];

  const defaultProps = {
    itemsInfo: itemsExample,
    onUpdateShoppingCart: () => {},
    onShowDetails: () => {}
  };

  describe('List behavior:', () => {
    it('Should show as much items as provided by props:', () => {
      const { getByTestId } = render(<ItemsListContent {...defaultProps} />);
      const list = getByTestId('itemslist-content');
      expect(list.childElementCount).toEqual(1);
    });
    it('Should call onShowDetails when clicking in the item title:', () => {
      const mockOnShowDetails = jest.fn();
      const { getByTestId } = render(
        <ItemsListContent {...defaultProps} onShowDetails={mockOnShowDetails} />
      );
      const title = getByTestId('product-title');
      fireEvent.click(title);
      expect(mockOnShowDetails).toHaveBeenCalled();
    });
    it('Should call onShowDetails when clicking in the item image:', () => {
      const mockOnShowDetails = jest.fn();
      const { getByTestId } = render(
        <ItemsListContent {...defaultProps} onShowDetails={mockOnShowDetails} />
      );
      const image = getByTestId('product-image');
      fireEvent.click(image);
      expect(mockOnShowDetails).toHaveBeenCalled();
    });
  });

  describe('Increment item quantity:', () => {
    it('Should call onUpdateShoppingCart when add-item is clicked:', () => {
      const mockedOnUpdateShoppingCart = jest.fn();
      const { getByText } = render(
        <ItemsListContent
          {...defaultProps}
          onUpdateShoppingCart={mockedOnUpdateShoppingCart}
        />
      );
      const addItem = getByText('+');
      fireEvent.click(addItem);
      expect(mockedOnUpdateShoppingCart).toHaveBeenCalled();
    });
  });

  describe('Decrement item quantity:', () => {
    it('Should call onUpdateShoppingCart when add-item is clicked:', () => {
      const mockedOnUpdateShoppingCart = jest.fn();
      const { getByText } = render(
        <ItemsListContent
          {...defaultProps}
          onUpdateShoppingCart={mockedOnUpdateShoppingCart}
        />
      );
      const addItem = getByText('-');
      fireEvent.click(addItem);
      expect(mockedOnUpdateShoppingCart).toHaveBeenCalled();
    });
  });

  describe('Change item quantity:', () => {
    it('Should call onUpdateShoppingCart when add-item is clicked:', () => {
      const mockedOnUpdateShoppingCart = jest.fn();
      const { getByTestId } = render(
        <ItemsListContent
          {...defaultProps}
          onUpdateShoppingCart={mockedOnUpdateShoppingCart}
        />
      );
      const input = getByTestId('StepInput-input');
      fireEvent.change(input, { target: { value: '2' } });
      expect(mockedOnUpdateShoppingCart).toHaveBeenCalled();
    });
  });
});
