import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getConfig } from '../../store/survey';
import SurveyPage from '../SurveyPage';
import SummaryPage from '../SummaryPage';
import {
  ModalContainer, ModalContent, ModalHeader, ModalClose, ModalBody,
} from './index.style';
import ModalFooter from './ModalFooter';

export default () => {
  const { config, actualPage } = useSelector((state) => state.survey);
  const {
    pages = [], title, colors, showCloseButton,
  } = config;
  const dispatch = useDispatch();
  const isSummaryPage = pages.length === actualPage;

  useEffect(() => {
    dispatch(getConfig());
  }, []);

  if (!pages.length) return false;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader colors={colors}>
          {title}
          {showCloseButton && <ModalClose />}
        </ModalHeader>
        <ModalBody>
          {!isSummaryPage && <SurveyPage />}
          {isSummaryPage && <SummaryPage />}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </ModalContainer>
  );
};
