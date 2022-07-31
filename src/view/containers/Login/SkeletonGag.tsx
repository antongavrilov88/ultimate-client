import React from 'react';
import { Box } from '../../components/Box';
import {
  ButtonWrapper,
  ContentWrapper,
  FormWrapper,
  InputWrapper,
  MainWrapper,
} from './Login.styled';
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
          SIGNING IN...
        </FormWrapper>
      </Box>
    </ContentWrapper>
  </MainWrapper>
);

export { SkeletonGag };
