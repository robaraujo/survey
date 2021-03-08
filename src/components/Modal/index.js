import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getConfig, nextPage, prevPage, submit, close,
} from '../../store/survey';
import SurveyPage from '../SurveyPage';
import SummaryPage from '../SummaryPage';
import {
  ModalContainer, ModalContent, ModalHeader, ModalClose, ModalBody,
} from './index.style';
import ModalFooter from './ModalFooter';

export default () => {
  const {
    config, actualPage, submitted, closed,
  } = useSelector((state) => state.survey);
  const {
    pages = [], title, colors, showCloseButton, showBackButton, showProgressBar,
  } = config;
  const totalPages = pages.length;
  const isSummary = actualPage === totalPages;
  const percent = (actualPage * 100) / totalPages;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    if (!isSummary) return dispatch(nextPage());

    setLoading(true);
    await dispatch(submit());
    return setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => dispatch(getConfig()), 0);
  }, []);

  if (!pages.length || closed || submitted) return false;

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader colors={colors}>
            {title}
            {showCloseButton && <ModalClose onClick={() => dispatch(close())} />}
          </ModalHeader>
          <ModalBody>
            {!isSummary && <SurveyPage />}
            {isSummary && <SummaryPage />}
          </ModalBody>
          <ModalFooter
            loading={loading}
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
