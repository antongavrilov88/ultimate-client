import { SIZEABLE, UI_THEMES } from 'enums/uiEnums';
import { useTheme } from 'hooks';
import React, { useCallback } from 'react';
import { Button } from 'view/components/Button';
import { MainWrapper } from './withThemeToggler.styled';

function withThemeToggler<ComponentProps>(
  Component: React.FC<ComponentProps>
): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => {
    const [theme, setTheme] = useTheme();

    const themeToggler = useCallback(() => {
      setTheme(theme === UI_THEMES.DARK ? UI_THEMES.LIGHT : UI_THEMES.DARK);
    }, [theme]);

    return (
      <>
        <MainWrapper>
          <Button onClick={themeToggler} size={SIZEABLE.LARGE}>
            Сменить тему
          </Button>
          <Component {...props} />
        </MainWrapper>
      </>
    );
  };

  return WrappedComponent;
}

export { withThemeToggler };
