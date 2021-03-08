import {
  shape, string, number, bool, arrayOf, oneOf,
} from 'prop-types';

export const inputType = shape({
  name: string,
  type: string,
  options: arrayOf(oneOf([string, number])),
  require: bool,
});

export const pageType = shape({
  title: string,
  inputs: inputType,
});

export default pageType;
