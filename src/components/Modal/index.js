import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getConfig, nextPage, prevPage } from '../../store/survey';
import SurveyPage from '../SurveyPage';
import SummaryPage from '../SummaryPage';
import {
  ModalContainer, ModalContent, ModalHeader, ModalClose, ModalBody,
} from './index.style';
import ModalFooter from './ModalFooter';

export default () => {
  const { config, actualPage } = useSelector((state) => state.survey);
  const {
    pages = [], title, colors, showCloseButton, showBackButton, showProgressBar,
  } = config;
  const totalPages = pages.length;
  const isSummary = actualPage < totalPages;
  const percent = (actualPage * 100) / totalPages;

  const dispatch = useDispatch();
  const isSummaryPage = pages.length === actualPage;
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    dispatch(nextPage());
  };

  useEffect(() => {
    setTimeout(() => dispatch(getConfig()), 0);
  }, []);

  if (!pages.length) return false;

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader colors={colors}>
            {title}
            {showCloseButton && <ModalClose />}
          </ModalHeader>
          <ModalBody>
            {!isSummaryPage && <SurveyPage />}
            {isSummaryPage && <SummaryPage />}
          </ModalBody>
          <ModalFooter
            actualPage={actualPage}
            isSummary={isSummary}
            percent={percent}
            showBackButton={showBackButton}
            showProgressBar={showProgressBar}
            colors={colors}
            onPrev={() => dispatch(prevPage())}
          />
        </ModalContent>
      </form>
    </ModalContainer>
  );
};
