import React from 'react';
import { bool, func, string } from 'prop-types';
import { InputTextContainer } from './index.style';
import { inputValueType } from '../../../../types/pageType';

const InputText = ({
  setAnswer, name, value, required, type,
}) => (
  <InputTextContainer
    required={required}
    onChange={(e) => setAnswer(e.target.value)}
    id={`input-${name}`}
    name={name}
    value={value}
    type={type}
  />

);

InputText.propTypes = {
  name: string.isRequired,
  value: inputValueType.isRequired,
  required: bool.isRequired,
  setAnswer: func.isRequired,
  type: string.isRequired,
};

export default InputText;
