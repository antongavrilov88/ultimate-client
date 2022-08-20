import styled from 'styled-components';

const MainWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: 100vh;
  padding-bottom: ${({ theme }) => theme.paddings.MEDIUM};
  padding-top: ${({ theme }) => theme.paddings.MEDIUM};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

const ContentWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => {
    const paddingHeight = theme.paddings.SMALL;
    const headerHeight = theme.paddings.MEDIUM;
    const baseHeight = theme.sizes.BASE_HEIGHT;
    return `calc(${baseHeight} - ${paddingHeight} - ${paddingHeight} - ${headerHeight})`;
  }};
`;

export { MainWrapper, ContentWrapper };
