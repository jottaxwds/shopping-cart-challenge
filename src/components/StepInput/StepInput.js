import React from 'react';
import PropTypes from 'prop-types';

import './StepInput.scss';

import Button from '../Button';

const StepInput = ({ onIncrement, onDecrement, currentValue }) => (
  <>
    <Button
      data-testid="add-item"
      onClick={() => onDecrement({ lastValue: currentValue })}
      extraClassNames={'Button__count'}
    >
      -
    </Button>
    <input
      disabled
      data-testid="StepInput-input"
      type="text"
      className={'StepInput__quantity'}
      value={currentValue}
    />
    <Button
      data-testid="remove-item"
      onClick={() => onIncrement({ lastValue: currentValue })}
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
  currentValue: PropTypes.number
};

export default StepInput;
