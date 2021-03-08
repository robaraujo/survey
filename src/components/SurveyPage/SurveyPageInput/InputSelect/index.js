import React from 'react';
import {
  arrayOf, func, number, oneOfType, string,
} from 'prop-types';
import { SelectContainer } from './index.style';
import { inputValueType } from '../../../../types/pageType';

const InputSelect = ({
  setAnswer, name, value, options,
}) => (
  <SelectContainer required name={name} onChange={(e) => setAnswer(e.target.value)} value={value}>
    <option value="" disabled>{' '}</option>
    {options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </SelectContainer>
);

InputSelect.propTypes = {
  name: string.isRequired,
  value: inputValueType.isRequired,
  setAnswer: func.isRequired,
  options: arrayOf(oneOfType([string, number])).isRequired,
};

export default InputSelect;
