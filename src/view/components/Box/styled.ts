import styled from 'styled-components';
import { BoxProps } from './types';

const BoxWrapper = styled.div.attrs<BoxProps>(() => ({
  'data-testid': 'component-box',
}))<BoxProps>`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};
  color: ${({ theme }) => theme.fontColors.PRIMARY};
  border: ${({ theme }) => theme.colors.BORDER_COLOR};
`;

export { BoxWrapper };
