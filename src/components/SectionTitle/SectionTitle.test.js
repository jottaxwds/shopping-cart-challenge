import React from 'react';
import { render } from '@testing-library/react';
import SectionTitle from './SectionTitle';

describe('Button unit tests ->', () => {
  const defaultProps = {
    children: 'Section title'
  };

  it('Should display children content:', () => {
    const { getByTestId } = render(<SectionTitle {...defaultProps} />);
    const component = getByTestId('section-title-component');
    expect(component.textContent).toEqual('Section title');
  });
});
