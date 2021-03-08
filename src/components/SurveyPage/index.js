import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../Page';
import SurveyInput from './SurveyPageInput';

const SurveyPage = () => {
  const { config, actualPage, answers } = useSelector((state) => state.survey);
  const page = config.pages[actualPage];
  const getValue = ({ name, multiple }) => {
    if (answers[name] !== undefined) return answers[name];
    return multiple ? [] : '';
  };

  return (
    <Page title={page.title} colors={config.colors} actualPage={actualPage}>
      {page.inputs.map((input) => (
        <SurveyInput key={input.name} input={input} value={getValue(input)} />
      ))}
    </Page>
  );
};

export default SurveyPage;
