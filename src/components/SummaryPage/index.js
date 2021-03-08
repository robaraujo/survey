import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../Page';
import { getInputLabel } from '../../helpers';

const SummaryPage = () => {
  const { config, answers } = useSelector((state) => state.survey);
  const getAnswer = (name) => (answers[name] !== undefined ? answers[name] : '');

  return (
    <Page title="Summary">
      {config.pages.map((page) => (
        page.inputs.map((input) => (
          <div>
            {getInputLabel(input)}
            :
            {' '}
            {getAnswer(input.name)}
          </div>
        ))
      ))}
    </Page>
  );
};

export default SummaryPage;
