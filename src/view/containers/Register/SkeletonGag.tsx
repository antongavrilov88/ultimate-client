import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonWrapper,
  ContentWrapper,
  FormWrapper,
  InputWrapper,
  MainWrapper,
} from './Register.styled';
import { Box } from '../../components/Box';
import { Skeleton } from '../../components/Skeleton';

const SkeletonGag: React.FC = () => (
  <MainWrapper>
    <ContentWrapper>
      <Box>
        <FormWrapper>
          <InputWrapper>
            <Skeleton />
          </InputWrapper>
          <InputWrapper>
            <Skeleton />
          </InputWrapper>
          <ButtonWrapper>
            <Skeleton />
          </ButtonWrapper>
          <Link to={'/login'}>уже есть аккаунт</Link>
        </FormWrapper>
      </Box>
    </ContentWrapper>
  </MainWrapper>
);

export { SkeletonGag };
