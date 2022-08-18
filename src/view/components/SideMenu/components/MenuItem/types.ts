import { SIDE_MENU_ITEMS } from '../../../../../enums/uiEnums';
import { PATH } from 'shared/constants';

interface MenuItemProps {
  title: SIDE_MENU_ITEMS;
  link: PATH;
  icon: JSX.Element;
  isActive: boolean;
  notificationsCounter?: number;
}

export { MenuItemProps };
