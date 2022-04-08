import { SIZEABLE } from 'enums/uiEnums';
import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: SIZEABLE;
}
