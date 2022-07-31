import React from 'react';
import { BoxWrapper } from './styled';
import { BoxProps } from './types';

const BoxView: React.FC<BoxProps> = ({ children }) => <BoxWrapper>{children}</BoxWrapper>;

export { BoxView };
