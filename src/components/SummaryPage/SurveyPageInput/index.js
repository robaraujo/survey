import React from 'react';
import { shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { getInputLabel } from '../../../helpers';
import { setAnswer } from '../../../store/survey';
import { InputContainer, InputText, Label } from './index.style';

const SurveyPageInput = ({ input }) => {
  const { name } = input;
  const dispatch = useDispatch();

  return (
    <InputContainer>
      <Label htmlFor={`input-${name}`}>{getInputLabel(input)}</Label>
      <InputText onChange={(e) => dispatch(setAnswer(name, e.target.value))} id={`input-${name}`} name={input.name} />
    </InputContainer>
  );
};

SurveyPageInput.propTypes = {
  input: shape({
    name: string.isRequired,
    label: string,
  }).isRequired,
};

export default SurveyPageInput;
