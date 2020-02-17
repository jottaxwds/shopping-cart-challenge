import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({ children, showModal, onCloseModal, ...rest }) => {
  return (
    <div
      data-testid="Modal-container"
      className={`Modal ${showModal ? 'Modal--visible' : 'Modal--not-visible'}`}
    >
      <div className="Modal__actions">
        <button
          data-testid="Modal-close-cta"
          className="Modal__close"
          onClick={onCloseModal}
        >
          X
        </button>
      </div>
      {children}
    </div>
  );
};

Modal.defaultProps = {
  onCloseModal: () => {},
  showModal: false,
  children: null
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  showModal: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
