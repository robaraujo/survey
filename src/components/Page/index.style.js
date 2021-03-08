import styled from 'styled-components';

export const PageContainer = styled.div``;

export const PageContent = styled.div``;

export const PageTitle = styled.div`
  font-size: 18pt;
  padding-left: 10px;
  border-left: 5px solid ${({ borderColor }) => borderColor};
  margin-bottom: 20px;
  & span {
    font-weight: bold;
    margin-right: 10px;
    color: #212529;
  }
`;

export default PageContainer;
