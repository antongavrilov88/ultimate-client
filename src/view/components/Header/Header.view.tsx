import React, { useMemo } from 'react';
import { SIZEABLE } from 'enums/uiEnums';
import { useAuthStatus } from 'hooks';
import { Toggler } from '../Toggler';
import { HeaderProps } from './types';
import { MainWrapper, ThemeTogglerWrapper, LogoutWrapper } from './Header.styled';
import { Button } from '../Button';

const HeaderView: React.FC<HeaderProps> = ({ onThemeToggle, email, onLogout, isTogglerOn }) => {
  const isAuthorised = useAuthStatus();

  const onThemeToggleHandler = () => {
    if (onThemeToggle) onThemeToggle();
  };

  const onLogoutHandler = () => {
    if (onLogout) onLogout();
  };

  const renderedLogoutButton = useMemo(() => {
    if (!isAuthorised) return null;
    return (
      <Button size={SIZEABLE.LARGE} onClick={onLogoutHandler}>
        Logout
      </Button>
    );
  }, [isAuthorised]);

  return (
    <MainWrapper>
      <LogoutWrapper>{renderedLogoutButton}</LogoutWrapper>
      <div>{email}</div>
      <ThemeTogglerWrapper>
        <Toggler onToggle={onThemeToggleHandler} isOn={isTogglerOn} />
      </ThemeTogglerWrapper>
    </MainWrapper>
  );
};

export { HeaderView };
