import React from 'react';
import { Header } from 'view/containers/Header';
import { ContentWrapper, MainWrapper } from './withHeader.styled';

function withHeader<ComponentProps>(Component: React.FC<ComponentProps>): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => (
    <>
      <MainWrapper>
        <Header />
        <ContentWrapper>
          <Component {...props} />
        </ContentWrapper>
      </MainWrapper>
    </>
  );
  return WrappedComponent;
}

export { withHeader };
