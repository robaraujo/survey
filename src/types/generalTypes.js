import {
  shape, string,
} from 'prop-types';

export const colorsType = shape({
  primary: string,
  secondary: string,
  fontColorPrimary: string,
  fontColorSecondary: string,
});
