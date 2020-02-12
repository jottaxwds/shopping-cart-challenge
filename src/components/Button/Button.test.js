import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Button from './Button';

describe('Button unit tests ->', () => {
  const extraClassName = 'EXTRA';

  const defaultProps = {
    children: 'Button text'
  };

  it('Should display children content:', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const component = getByText('Button text');
    expect(component.textContent).toEqual('Button text');
  });

  it('Should call onClick when button is clicked:', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button {...defaultProps} onClick={onClickMock} />
    );
    fireEvent.click(getByText('Button text'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('Should add extra className if its provided by props:', () => {
    const { getByText } = render(
      <Button {...defaultProps} extraClassNames={extraClassName} />
    );
    const component = getByText('Button text');
    expect(component.classList[1]).toEqual(extraClassName);
  });

  it('Should not add extra class if not provided:', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const component = getByText('Button text');
    const expectedClassList = `Button`;
    expect(component.classList[0]).toEqual(expectedClassList);
  });
});
