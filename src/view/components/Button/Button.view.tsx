import React from 'react';
import { ButtonWrapper } from './Button.styled';
import { ButtonProps } from './types';

const ButtonView: React.FC<ButtonProps> = ({ children, ...restProps }) => (
  <ButtonWrapper {...restProps}>{children}</ButtonWrapper>
);
export { ButtonView };
