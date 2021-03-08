import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { SelectContainer } from './index.style';

const InputSelect = ({
  setAnswer, name, value, options,
}) => (
  <SelectContainer value={value} required name={name} onChange={(e) => setAnswer(e.target.value)}>
    <option value="" disabled selected>{' '}</option>
    {options.map((option) => <option value={option}>{option}</option>)}
  </SelectContainer>
);

InputSelect.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  setAnswer: func.isRequired,
  options: arrayOf(string).isRequired,
};

export default InputSelect;
