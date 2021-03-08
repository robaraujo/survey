import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../Page';
import SurveyInput from '../SummaryPage/SurveyPageInput';

const SurveyPage = () => {
  const { config, actualPage } = useSelector((state) => state.survey);
  const page = config.pages[actualPage];

  return (
    <Page title={page.title}>
      {page.inputs.map((input) => <SurveyInput input={input} />)}
    </Page>
  );
};

export default SurveyPage;
