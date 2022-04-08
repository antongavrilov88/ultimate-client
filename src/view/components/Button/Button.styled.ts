import { SIZEABLE } from 'enums/uiEnums';
import styled from 'styled-components';
import { ButtonProps } from './types';

const LARGE_HEIGHT = 60;
const MEDIUM_HEIGHT = 30;
const SMALL_HEIGHT = 20;

const ButtonWrapper = styled.button<ButtonProps>`
  width: 100%;
  height: ${({ size }) => {
    if (size === SIZEABLE.LARGE) return LARGE_HEIGHT;
    if (size === SIZEABLE.MEDIUM) return MEDIUM_HEIGHT;
    if (size === SIZEABLE.SMALL) return SMALL_HEIGHT;
    return MEDIUM_HEIGHT;
  }}px;
`;

export { ButtonWrapper };
