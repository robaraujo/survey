import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  text-transform: uppercase;
  & svg {
    width: 13px;
    vertical-align: text-top;
    &:not(:first-child) {
      margin-left: 11px; 
    }
  }
  &[disabled] {
    opacity: 0.7;
  }
  color: ${({ color }) => color || '#fff'};
  background-color: ${({ bg }) => bg || '##007bff'};
  ${({ inverted, bg }) => inverted && `
    border-color: ${bg};
    background-color: transparent;
    color: ${bg};
  `};
`;

export default Button;
