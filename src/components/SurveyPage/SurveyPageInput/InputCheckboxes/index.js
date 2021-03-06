/* eslint-disable jsx-a11y/label-has-associated-control */
import { arrayOf, func, string } from 'prop-types';
import React from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { ucfirst } from '../../../../helpers';
import { inputValueType } from '../../../../types/pageType';
import { LabelContainer } from './index.style';

const InputCheckboxes = ({
  name, value, setAnswer, options,
}) => (
  <CheckboxGroup
    name={name}
    value={value}
    onChange={setAnswer}
  >
    {(Checkbox) => options.map((option) => (
      <LabelContainer key={option}>
        <Checkbox value={option} required={!value.length} />
        {' '}
        {ucfirst(option)}
      </LabelContainer>
    ))}
  </CheckboxGroup>
);

InputCheckboxes.propTypes = {
  name: string.isRequired,
  value: inputValueType.isRequired,
  setAnswer: func.isRequired,
  options: arrayOf(string).isRequired,
};

export default InputCheckboxes;
