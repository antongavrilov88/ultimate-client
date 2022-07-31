import styled from 'styled-components';
import { InputProps } from './types';

const MainWrapper = styled.div`
  height: ${({ theme }) => theme.sizes.SMALL};
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};

  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fontSizes.BASE};
  line-height: ${({ theme }) => theme.lineHeights.BASE}px;

  position: relative;
`;

const StyledInput = styled.input<InputProps>`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  color: ${({ theme }) => theme.fontColors.PRIMARY};
  transition: padding 0.3s ease;

  background-color: ${({ theme, disabled }) => {
    if (disabled) return theme.colors.BACKGROUND;
    return theme.colors.BACKGROUND;
  }};

  padding-top: ${({ theme, label }) => {
    const { SPACE_BASE, SPACE_LARGE } = theme.spaces;
    if (label) return SPACE_LARGE;
    return SPACE_BASE;
  }}px;
  padding-right: ${({ theme, hasIcon }) => {
    const { SPACE_BASE, SPACE_EXTRA_BIG } = theme.spaces;
    if (hasIcon) return SPACE_EXTRA_BIG;
    return SPACE_BASE;
  }}px;
  padding-bottom: ${({ theme, label }) => {
    const { SPACE_BASE, SPACE_TINY } = theme.spaces;
    if (label) return SPACE_TINY;
    return SPACE_BASE;
  }}px;
  padding-left: ${({ theme }) => theme.spaces.SPACE_BASE}px;

  border-radius: ${({ theme }) => theme.borderRadiuses.LARGE};

  outline: none;
  border: ${({ theme, outlined, error, disabled }) => {
    const { DANGER, BORDER_COLOR, DEFAULT, DISABLED_ELEMENT_BORDER } = theme.colors;
    if (disabled) return `1px solid ${DISABLED_ELEMENT_BORDER}`;
    if (error) return `1px solid ${DANGER}`;
    if (outlined) return `1px solid ${BORDER_COLOR}`;
    return `1px solid ${DEFAULT}`;
  }};
  font-size: ${({ theme }) => theme.fontSizes.BASE};
  line-height: 26px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.BORDER_COLOR};
  }

  &:hover {
    border: ${({ theme, disabled, outlined, error }) => {
      const { DISABLED_ELEMENT_BORDER, DANGER, OUTLINED_ELEMENT_BORDER, BORDER_COLOR } =
        theme.colors;
      if (disabled) return `1px solid ${DISABLED_ELEMENT_BORDER}`;
      if (error) return `1px solid ${DANGER}`;
      if (outlined) return `1px solid ${OUTLINED_ELEMENT_BORDER}`;
      return `1px solid ${BORDER_COLOR}`;
    }};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.PRIMARY};

    &::placeholder {
      color: ${({ theme }) => theme.fontColors.PRIMARY};
    }
  }
`;

const IconWrapper = styled.div<{ disabled?: boolean }>`
  cursor: ${({ onClick, disabled }) => {
    if (onClick && disabled) return 'not-allowed';
    if (onClick) return 'pointer';
    return 'default';
  }};
  align-self: center;
  display: flex;
  position: absolute;
  right: 16px;
`;

const ErrorWrapper = styled.div`
  color: ${({ theme }) => theme.colors.DANGER};
  padding-left: ${({ theme }) => theme.spaces.SPACE_BASE}px;
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  line-height: ${({ theme }) => theme.lineHeights.EXTRA_SMALL}px;
  padding-top: 6px;
`;

const LabelWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 17px;
  color: ${({ theme }) => theme.colors.BORDER_COLOR};
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  line-height: ${({ theme }) => theme.lineHeights.SMALL}px;
`;

export { MainWrapper, LabelWrapper, IconWrapper, ErrorWrapper, StyledInput };
