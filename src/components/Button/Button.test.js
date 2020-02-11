import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button unit tests ->', () => {
  const extraClassName = 'EXTRA';

  const defaultProps = {
    children: 'Button text'
  };

  it('Should display children content:', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const component = getByTestId('button-component');
    expect(component.textContent).toEqual('Button text');
  });

  it('Should call onClick when button is clicked:', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button {...defaultProps} onClick={onClickMock} />
    );
    fireEvent.click(getByTestId('button-component'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('Should add extra className if its provided by props:', () => {
    const { getByTestId } = render(
      <Button {...defaultProps} extraClassNames={extraClassName} />
    );
    const component = getByTestId('button-component');
    expect(component.classList[1]).toEqual(extraClassName);
  });

  it('Should not add extra class if not provided:', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const component = getByTestId('button-component');
    const expectedClassList = `Button`;
    expect(component.classList[0]).toEqual(expectedClassList);
  });
});
