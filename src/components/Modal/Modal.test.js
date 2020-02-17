import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal unit tests:', () => {
  const defaultProps = {
    children: <div data-testid="children-example">Hey!</div>
  };

  describe('Modal visibility: ', () => {
    it('Should contains Modal--visible in Modal-container if showModal, given by props, is true', () => {
      const { getByTestId } = render(
        <Modal {...defaultProps} showModal={true} />
      );
      const element = getByTestId('Modal-container');
      expect(
        element.className.split(' ').includes('Modal--visible')
      ).toBeTruthy();
    });
    it('Should not contains Modal--not-visible in Modal-container if showModal, given by props, is true', () => {
      const { getByTestId } = render(
        <Modal {...defaultProps} showModal={true} />
      );
      const element = getByTestId('Modal-container');
      expect(element.className.split(' ').includes('Modal--not-visible')).toBe(
        false
      );
    });

    it('Should contains Modal--not-visible in Modal-container if showModal, given by props, is false', () => {
      const { getByTestId } = render(
        <Modal {...defaultProps} showModal={false} />
      );
      const element = getByTestId('Modal-container');
      expect(
        element.className.split(' ').includes('Modal--not-visible')
      ).toBeTruthy();
    });

    it('Should not contains Modal--visible in Modal-container if showModal, given by props, is false', () => {
      const { getByTestId } = render(
        <Modal {...defaultProps} showModal={false} />
      );
      const element = getByTestId('Modal-container');
      expect(element.className.split(' ').includes('Modal--visible')).toBe(
        false
      );
    });

    it('Should contains Modal--not-visible in Modal-container if showModal prop is not provided', () => {
      const { getByTestId } = render(<Modal {...defaultProps} />);
      const element = getByTestId('Modal-container');
      expect(
        element.className.split(' ').includes('Modal--not-visible')
      ).toBeTruthy();
    });

    it('Should not contains Modal--visible in Modal-container if showModal prop is not provided', () => {
      const { getByTestId } = render(<Modal {...defaultProps} />);
      const element = getByTestId('Modal-container');
      expect(element.className.split(' ').includes('Modal--visible')).toBe(
        false
      );
    });

    it('Should display children inside modal:', () => {
      const { getByTestId } = render(<Modal {...defaultProps} />);
      const element = getByTestId('children-example');
      expect(element).toBeTruthy();
    });
  });

  describe('Modal actions: ', () => {
    it('Should call onCloseModal when modal-close-cta is clicked', () => {
      const mockOnCloseModal = jest.fn();
      const { getByTestId } = render(
        <Modal {...defaultProps} onCloseModal={mockOnCloseModal} />
      );
      fireEvent.click(getByTestId('Modal-close-cta'));
      expect(mockOnCloseModal).toHaveBeenCalled();
    });
  });
});
