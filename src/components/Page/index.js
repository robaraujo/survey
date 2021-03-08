import { node, number, string } from 'prop-types';
import React from 'react';
import { PageContainer, PageContent, PageTitle } from './index.style';
import { colorsType } from '../../types/generalTypes';

const Page = ({
  title, children, colors, actualPage,
}) => (
  <PageContainer>
    <PageTitle borderColor={colors.primary}>
      <span>{actualPage + 1}</span>
      {title}
    </PageTitle>
    <PageContent>
      {children}
    </PageContent>
  </PageContainer>
);

Page.propTypes = {
  title: string.isRequired,
  colors: colorsType.isRequired,
  children: node.isRequired,
  actualPage: number.isRequired,
};

export default Page;
