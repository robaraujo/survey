import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const ModalFooterContainer = styled.div`
  border-top: 1px solid #eaeaea;
`;

export const FooterControlBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const FooterSpinner = styled(FaSpinner)`
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }  
 `;
