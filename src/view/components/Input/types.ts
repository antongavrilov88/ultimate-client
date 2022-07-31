import { SIZEABLE } from '../../../enums/uiEnums';
import { Nullable } from '../../../types/utils';
import React from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onChangeHandler?: (input: string) => void;
  hasIcon?: boolean;
  outlined?: boolean;
  isPassword?: boolean;
  error?: Nullable<string>;
  controlledValue?: string;
  customRef?: Nullable<React.RefObject<HTMLInputElement>>;
  // children?: JSX.Element[] | JSX.Element;
  label?: string;
  isDisabled?: boolean;
  onIconClickHandler?: () => void;
  withTypeToggle?: boolean;
  autoComplete?: string;
  maxLength?: number;
}

export { InputProps };
