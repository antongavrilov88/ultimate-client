import styled from 'styled-components';

const MainWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.fontColors.PRIMARY};
`;

const ContentWrapper = styled.div`
  align-self: center;
  justify-self: center;
  justify-content: center;

  color: ${({ theme }) => theme.fontColors.PRIMARY};
`;

export { MainWrapper, ContentWrapper };
