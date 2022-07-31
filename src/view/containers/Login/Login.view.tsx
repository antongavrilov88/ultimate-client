import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Input } from 'view/components/Input';
import { Link } from 'react-router-dom';
import { DispatchProps, StateProps } from './types';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { SIZEABLE } from '../../../enums/uiEnums';
import {
  ButtonWrapper,
  ContentWrapper,
  ErrorMessageWrapper,
  FormWrapper,
  InputWrapper,
  MainWrapper,
} from './Login.styled';
import { RequestStatus } from '../../../shared/constants';
import { SkeletonGag } from './SkeletonGag';

type Props = StateProps & DispatchProps;

const LoginView: React.FC<Props> = ({ resetError, requestStatus, requestError, loginUser }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    resetError();
  }, []);

  const loginHandler = () => {
    if (emailRef.current && passwordRef.current) {
      const newUserData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      loginUser(newUserData);
    }
  };

  const checkForm = () =>
    setIsFormValid(
      Boolean(
        passwordRef.current &&
          passwordRef.current.value &&
          passwordRef.current.value !== '' &&
          emailRef.current &&
          emailRef.current.value &&
          emailRef.current.value !== ''
      )
    );

  const onEmailChangeHandler = () => {
    checkForm();
  };

  const onPasswordChangeHandler = () => {
    checkForm();
  };

  const renderedError = useMemo(() => {
    if (!requestError || requestError.message === '') return null;
    return <ErrorMessageWrapper>{requestError.message}</ErrorMessageWrapper>;
  }, [requestError]);

  const renderedContent = useMemo(() => {
    if (requestStatus === RequestStatus.LOADING) return <SkeletonGag />;
    return (
      <MainWrapper>
        <ContentWrapper>
          <Box>
            <FormWrapper>
              <InputWrapper>
                <Input
                  onChangeHandler={onEmailChangeHandler}
                  customRef={emailRef}
                  placeholder={'Login'}
                  outlined
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  isPassword
                  withTypeToggle
                  onChangeHandler={onPasswordChangeHandler}
                  customRef={passwordRef}
                  placeholder={'Password'}
                  outlined
                />
              </InputWrapper>
              {renderedError}
              <ButtonWrapper>
                <Button onClick={loginHandler} size={SIZEABLE.LARGE} isDisabled={!isFormValid}>
                  SIGN IN
                </Button>
              </ButtonWrapper>
              <Link to={'/register'}>нет аккаунта</Link>
            </FormWrapper>
          </Box>
        </ContentWrapper>
      </MainWrapper>
    );
  }, [requestStatus, isFormValid]);

  return <>{renderedContent}</>;
};

export { LoginView };
