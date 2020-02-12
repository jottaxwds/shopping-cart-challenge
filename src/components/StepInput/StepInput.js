import React from 'react';
import PropTypes from 'prop-types';

import './StepInput.scss';

import Button from '../Button';

const StepInput = ({ onIncrement, onDecrement, onChange, currentValue }) => (
  <>
    <Button
      data-testid="add-item"
      onClick={onDecrement}
      extraClassNames={'Button__count'}
    >
      -
    </Button>
    <input
      data-testid="StepInput-input"
      type="text"
      className={'StepInput__quantity'}
      value={currentValue}
      onChange={onChange}
    />
    <Button
      data-testid="remove-item"
      onClick={onIncrement}
      extraClassNames={'Button__count'}
    >
      +
    </Button>
  </>
);

StepInput.defaultProps = {
  currentValue: 0
};

StepInput.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.number
};

export default StepInput;
