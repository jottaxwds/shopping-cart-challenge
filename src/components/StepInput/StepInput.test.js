import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StepInput from './StepInput';

describe('StepInput unit tests ->', () => {
  const defaultProps = {
    onChange: () => {},
    onIncrement: () => {},
    onDecrement: () => {}
  };

  it('Should call onIncrement when increment button is clicked:', () => {
    const mockHandleOnIncrement = jest.fn();
    const { getByText } = render(
      <StepInput {...defaultProps} onIncrement={mockHandleOnIncrement} />
    );
    fireEvent.click(getByText('+'));
    expect(mockHandleOnIncrement).toHaveBeenCalled();
  });

  it('Should call onIncrement when increment button is clicked:', () => {
    const mockHandleOnDecrement = jest.fn();
    const { getByText } = render(
      <StepInput {...defaultProps} onDecrement={mockHandleOnDecrement} />
    );
    fireEvent.click(getByText('-'));
    expect(mockHandleOnDecrement).toHaveBeenCalled();
  });

  it('Should call onChange when input value is changed:', () => {
    const mockHandleOnChange = jest.fn();
    const { getByTestId } = render(
      <StepInput {...defaultProps} onChange={mockHandleOnChange} />
    );
    fireEvent.change(getByTestId('StepInput-input'), {
      target: { value: '1' }
    });
    expect(mockHandleOnChange).toHaveBeenCalled();
  });
});
