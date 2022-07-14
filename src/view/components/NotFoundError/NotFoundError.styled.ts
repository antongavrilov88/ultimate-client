import styled from 'styled-components';

const MainWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.fontColors.PRIMARY};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  color: ${({ theme }) => theme.fontColors.PRIMARY};
`;

export { MainWrapper, ContentWrapper };
