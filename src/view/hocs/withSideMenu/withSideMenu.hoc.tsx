import React from 'react';
import { ContentWrapper, MainWrapper, MenuWrapper } from './withSideMenu.styled';
import { SideMenu } from '../../containers/SideMenu';

function withSideMenu<ComponentProps>(
  Component: React.FC<ComponentProps>
): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => (
    <MainWrapper>
      <MenuWrapper>
        <SideMenu />
      </MenuWrapper>
      <ContentWrapper>
        <Component {...props} />
      </ContentWrapper>
    </MainWrapper>
  );
  return WrappedComponent;
}

export { withSideMenu };
