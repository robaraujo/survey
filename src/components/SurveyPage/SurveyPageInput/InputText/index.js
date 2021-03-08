import React from 'react';
import { bool, func, string } from 'prop-types';
import { InputTextContainer } from './index.style';

const InputText = ({
  setAnswer, name, value, required,
}) => (
  <InputTextContainer
    required={required}
    onChange={(e) => setAnswer(e.target.value)}
    id={`input-${name}`}
    name={name}
    value={value}
  />

);

InputText.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  required: bool.isRequired,
  setAnswer: func.isRequired,
};

export default InputText;
