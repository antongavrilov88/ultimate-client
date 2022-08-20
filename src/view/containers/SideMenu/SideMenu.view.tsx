import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { SideMenu } from '../../components/SideMenu';
import { sideMenuItems } from './constants';

const SideMenuView: React.FC = () => {
  const location = useLocation();

  const currentMenuItems = useMemo(
    () =>
      sideMenuItems.map((item) => {
        const isItemActive = location.pathname === item.link;
        if (isItemActive) {
          return { ...item, isActive: true };
        }
        return item;
      }),
    [location]
  );

  return <SideMenu items={currentMenuItems} />;
};

export { SideMenuView };
