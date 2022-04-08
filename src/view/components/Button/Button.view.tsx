import React from 'react';
import { ButtonWrapper } from './Button.styled';
import { ButtonProps } from './types';

const ButtonView: React.FC<ButtonProps> = (props) => (
  <ButtonWrapper {...props}>Чудо кнопка</ButtonWrapper>
);

export { ButtonView };
