import React, { useMemo } from 'react';
import { Header } from '../../components/Header';
import { ContainerProps } from './Header.container';
import { useTheme } from '../../../hooks';
import { UI_THEMES } from '../../../enums/uiEnums';

type Props = ContainerProps;

const HeaderView: React.FC<Props> = ({ email, onLogout }) => {
  const [theme, toggleTheme] = useTheme();

  const themeToggle = () => toggleTheme();

  const isTogglerOn = useMemo(() => theme === UI_THEMES.DARK, [theme]);

  return (
    <Header
      email={email}
      onLogout={onLogout}
      onThemeToggle={themeToggle}
      isTogglerOn={isTogglerOn}
    />
  );
};

export { HeaderView };
