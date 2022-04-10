import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.fontColors.PRIMARY};

  width: 100%;
  height: 70px;

  padding: 20px;

  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const ThemeTogglerWrapper = styled.div`
  align-self: center;
  justify-self: center;
`;

const LogoutWrapper = styled.div`
  align-self: center;
  justify-self: center;
`;

export { MainWrapper, ThemeTogglerWrapper, LogoutWrapper };
