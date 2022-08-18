import styled from 'styled-components';

const MainWrapper = styled.div`
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

const ErrorMessageWrapper = styled.div`
  color: ${({ theme }) => theme.fontColors.DANGER};
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  height: 42px;
  width: 250px;
`;

const ButtonWrapper = styled.div`
  height: 60px;
  width: 250px;
`;

export {
  MainWrapper,
  ContentWrapper,
  ErrorMessageWrapper,
  InputWrapper,
  FormWrapper,
  ButtonWrapper,
};
