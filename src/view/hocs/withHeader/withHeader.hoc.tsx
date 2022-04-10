import { authActions } from 'ducks/Auth/actions';
import { UI_THEMES } from 'enums/uiEnums';
import { useTheme } from 'hooks';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from 'view/components/Header';
import { MainWrapper } from './withHeader.styled';

function withHeader<ComponentProps>(Component: React.FC<ComponentProps>): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => {
    const [theme, toggleTheme] = useTheme();

    const themeToggler = () => toggleTheme();

    const dispatch = useDispatch();

    const logoutHandler = () => dispatch(authActions.logout());

    const isTogglerOn = useMemo(() => theme === UI_THEMES.DARK, [theme]);

    return (
      <>
        <MainWrapper>
          <Header onThemeToggle={themeToggler} onLogout={logoutHandler} isTogglerOn={isTogglerOn} />
          <Component {...props} />
        </MainWrapper>
      </>
    );
  };

  return WrappedComponent;
}

export { withHeader };
