import React from 'react';
import { MenuWrapper } from './SideMenu.styled';
import { SideMenuProps } from './types';
import { MenuItem } from './components/MenuItem';

const SideMenuView: React.FC<SideMenuProps> = ({ items }) => (
  <MenuWrapper>
    {items.map((itemProps) => (
      <MenuItem {...itemProps} />
    ))}
  </MenuWrapper>
);

export { SideMenuView };
