import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemProps } from './types';
import { ItemWrapper, MainWrapper } from './MenuItem.styled';

const MenuItemView: React.FC<MenuItemProps> = ({ title, icon, isActive, link }) => {
  const renderedTitle = useMemo(() => {
    if (!title) return null;
    return <>{title}</>;
  }, [title]);

  const renderedIcon = useMemo(() => {
    if (!icon) return null;
    return <>{icon}</>;
  }, [icon]);

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <MainWrapper isActive={isActive}>
        <ItemWrapper>
          {renderedIcon}
          {renderedTitle}
        </ItemWrapper>
      </MainWrapper>
    </Link>
  );
};

export { MenuItemView };
