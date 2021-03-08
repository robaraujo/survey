import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const ModalContainer = styled.div`
  border: 2px solid red;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  font-family: sans-serif;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 96%;
  max-width: 500px;
`;

export const ModalClose = styled(FaTimes)`
  position: absolute;
  right: 10px;
  top: 15px;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 12px 22px;
  font-size: 1.25rem;
  
  ${({ colors }) => `
    background-color: ${colors.primary};
    color: ${colors.fontColorPrimary};
    
    & ${ModalClose} {
      color: ${colors.fontColorPrimary};
    }
  `}
`;

export const ModalBody = styled.div`
  padding: 30px 20px;
`;
