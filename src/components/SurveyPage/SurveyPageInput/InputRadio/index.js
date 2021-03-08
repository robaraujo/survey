import React from 'react';
import {
  arrayOf, bool, func, string,
} from 'prop-types';
import { ucfirst } from '../../../../helpers';
import { RadioContainer } from './index.style';
import { inputValueType } from '../../../../types/pageType';

const InputRadio = ({
  setAnswer, name, value, options, required,
}) => (
  <div>
    {options.map((option) => (
      <RadioContainer key={option}>
        <label htmlFor={`radio-${name}-${option}`} value={option}>{ucfirst(option)}</label>
        <input
          required={required}
          name={name}
          id={`radio-${name}-${option}`}
          onChange={(e) => setAnswer(e.target.value)}
          value={option}
          checked={value === option}
          type="radio"
        />
      </RadioContainer>
    ))}
  </div>
);

InputRadio.propTypes = {
  name: string.isRequired,
  value: inputValueType.isRequired,
  required: bool.isRequired,
  setAnswer: func.isRequired,
  options: arrayOf(string).isRequired,
};

export default InputRadio;
