import { node, string } from 'prop-types';
import React from 'react';
import { PageContainer, PageContent } from './index.style';

const Page = ({
  title, children,
}) => (
  <PageContainer>
    <h1>{title}</h1>
    <PageContent>
      {children}
    </PageContent>
  </PageContainer>
);

Page.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};

export default Page;
