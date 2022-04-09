import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from 'style/global';
import { ThemeProvider } from 'styled-components';
import { mapThemes } from 'style/themes';
import { mainAction } from 'ducks/Main/actions';
import { getTheme } from '../ducks/Main/selectors';
import { Button } from './components/Button';
import { SIZEABLE, UI_THEMES } from '../enums/uiEnums';

const ThemedApp: React.FC = () => {
  const currentThemeLabel = useSelector(getTheme);

  const dispatch = useDispatch();

  const themeToggler = useCallback(() => {
    dispatch(
      mainAction.setTheme(currentThemeLabel === UI_THEMES.DARK ? UI_THEMES.LIGHT : UI_THEMES.DARK)
    );
  }, [currentThemeLabel]);

  const currentTheme = mapThemes[currentThemeLabel];

  return (
    <ThemeProvider theme={currentTheme}>
      <Button onClick={themeToggler} size={SIZEABLE.LARGE}>
        Сменить тему
      </Button>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export { ThemedApp };
