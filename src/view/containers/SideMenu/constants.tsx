import React from 'react';
import { MenuItemProps } from '../../components/SideMenu/components/MenuItem/types';
import { SIDE_MENU_ITEMS } from '../../../enums/uiEnums';
import { PATH } from '../../../shared/constants';

const sideMenuItems: MenuItemProps[] = [
  {
    title: SIDE_MENU_ITEMS.MAIN,
    icon: <>iH</>,
    isActive: false,
    link: PATH.MAIN,
  },
  {
    title: SIDE_MENU_ITEMS.COMPONENTS,
    icon: <>iC</>,
    isActive: false,
    link: PATH.COMPONENTS,
  },
];

export { sideMenuItems };
