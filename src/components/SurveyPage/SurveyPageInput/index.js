import React from 'react';
import { shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { getInputLabel } from '../../../helpers';
import { setAnswer } from '../../../store/survey';
import { InputContainer, Label } from './index.style';
import InputCheckboxes from './InputCheckboxes';
import InputSelect from './InputSelect';
import InputRadio from './InputRadio';
import InputText from './InputText';

const SurveyPageInput = ({ input, value }) => {
  const { name, type, required = false } = input;
  const { options = [] } = input;
  const dispatch = useDispatch();
  const answer = (val) => dispatch(setAnswer(name, val));

  if (type === 'range') {
    const { range } = input;
    for (let i = range[0]; i <= range[1]; i += 1) {
      options.push(i);
    }
  }

  return (
    <InputContainer>
      <Label htmlFor={`input-${name}`}>{getInputLabel(input)}</Label>
      {['email', 'text'].includes(type) && (
        <InputText
          required={required}
          name={name}
          value={value}
          setAnswer={answer}
        />
      )}
      {['select', 'range'].includes(type) && (
        <InputSelect
          name={name}
          value={value}
          setAnswer={answer}
          options={options}
        />
      )}
      {type === 'radio' && (
        <InputRadio
          required={required}
          name={name}
          value={value}
          setAnswer={answer}
          options={options}
        />
      )}
      {type === 'checkbox' && (
        <InputCheckboxes
          name={name}
          value={value}
          setAnswer={answer}
          options={options}
        />
      )}
    </InputContainer>
  );
};

SurveyPageInput.propTypes = {
  input: shape({
    name: string.isRequired,
    label: string,
  }).isRequired,
  value: string.isRequired,
};

export default SurveyPageInput;
