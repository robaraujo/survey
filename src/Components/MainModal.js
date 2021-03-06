import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getConfig } from '../store/survey';

const MainModalContainer = styled.div`
  border: 2px solid red;
`;

export default () => {
  const { config } = useSelector((state) => state.survey);
  const dispatch = useDispatch();
  const { showPageNumber, showProgressBar, showBackButton } = config;

  useEffect(() => {
    dispatch(getConfig());
  }, []);

  return (
    <MainModalContainer>
      {showPageNumber && 'showPageNumber'}
      {showProgressBar && 'showProgressBar'}
      {showBackButton && 'showBackButton'}
    </MainModalContainer>
  );
};
