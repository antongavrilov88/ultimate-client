import styled from 'styled-components';
import { MenuItemProps } from './types';

const MainWrapper = styled.div<Partial<MenuItemProps>>`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;

  color: ${({ theme, isActive }) => {
    if (isActive) return theme.fontColors.ACTIVE;
    return theme.fontColors.PRIMARY;
  }};
`;

const ItemWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};

  padding: ${({ theme }) => theme.paddings.SUPER_TINY};

  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;

  cursor: pointer;
`;

export { MainWrapper, ItemWrapper };
