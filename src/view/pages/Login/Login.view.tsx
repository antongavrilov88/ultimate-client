import { authActions } from 'ducks/Auth/actions';
import { SIZEABLE } from 'enums/uiEnums';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'view/components/Button';
import { ContentWrapper, MainWrapper } from './Login.styled';

const LoginView: React.FC = () => {
  const dispatch = useDispatch();

  const onLogin = () =>
    dispatch(
      authActions.login({
        email: '123',
        password: '123',
      })
    );

  return (
    <MainWrapper>
      <ContentWrapper>
        <Button onClick={onLogin} size={SIZEABLE.LARGE}>
          Login
        </Button>
      </ContentWrapper>
    </MainWrapper>
  );
};

export { LoginView };
