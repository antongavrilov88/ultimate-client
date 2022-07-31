import styled from 'styled-components';
import { SIZEABLE } from '../../../enums/uiEnums';
import { ButtonProps } from './types';

const LARGE_HEIGHT = 60;
const MEDIUM_HEIGHT = 30;
const SMALL_HEIGHT = 20;

const ButtonWrapper = styled.button.attrs<ButtonProps>(({ type, isDisabled }) => ({
  type,
  disabled: isDisabled,
  'data-testid': 'component-button',
}))<ButtonProps>`
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  height: ${({ size }) => {
    if (size === SIZEABLE.LARGE) return LARGE_HEIGHT;
    if (size === SIZEABLE.MEDIUM) return MEDIUM_HEIGHT;
    if (size === SIZEABLE.SMALL) return SMALL_HEIGHT;
    return MEDIUM_HEIGHT;
  }}px;

  background-color: ${({ theme }) => theme.colors.PRIMARY};

  color: ${({ theme }) => theme.fontColors.PRIMARY};

  font-size: 24px;
  font-weight: 600;
`;

export { ButtonWrapper };
