import {
  shape, string, number, bool, arrayOf, oneOfType,
} from 'prop-types';

export const inputType = shape({
  name: string,
  type: string,
  options: arrayOf(oneOfType([string, number])),
  require: bool,
});
export const inputValueType = oneOfType([string, number, arrayOf(oneOfType([string, number]))]);

export const pageType = shape({
  title: string,
  inputs: inputType,
});

export default pageType;
