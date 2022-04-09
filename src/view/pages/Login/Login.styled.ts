import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.fontColors.PRIMARY};
`;

const ContentWrapper = styled.div`
  align-self: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColors.PRIMARY};
`;

export { MainWrapper, ContentWrapper };
