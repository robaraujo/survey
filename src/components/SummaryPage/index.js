import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../Page';
import { getLabelText } from '../../helpers';
import { SummaryItemContainer } from './index.style';

const SummaryPage = () => {
  const { config, answers, actualPage } = useSelector((state) => state.survey);
  const getAnswer = ({ name, multiple }) => {
    if (answers[name] === undefined) return '';
    return multiple ? answers[name].join(', ') : answers[name];
  };

  return (
    <Page title="Summary" colors={config.colors} actualPage={actualPage}>
      {config.pages.map((page) => (
        page.inputs.map((input) => (
          <SummaryItemContainer key={input.name}>
            <b>{getLabelText(input)}</b>
            :
            {' '}
            {getAnswer(input)}
          </SummaryItemContainer>
        ))
      ))}
    </Page>
  );
};

export default SummaryPage;
