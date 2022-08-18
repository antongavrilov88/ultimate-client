import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const MenuWrapper = styled.aside`
  width: fit-content;
`;

const ContentWrapper = styled.main`
  position: relative;
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
`;

export { MainWrapper, MenuWrapper, ContentWrapper };
