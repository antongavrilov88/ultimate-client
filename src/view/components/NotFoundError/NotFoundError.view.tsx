import React from 'react';
import { ContentWrapper, MainWrapper } from './NotFoundError.styled';

const NotFoundErrorView: React.FC = () => (
  <MainWrapper>
    <ContentWrapper>Page not found (404)</ContentWrapper>
  </MainWrapper>
);

export { NotFoundErrorView };
