import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from 'style/global';
import { ThemeProvider } from 'styled-components';
import { mapThemes } from 'style/themes';
import { BrowserRouter } from 'react-router-dom';
import { getTheme } from '../ducks/Main/selectors';
import { AppRoutes } from './routing';

const ThemedApp: React.FC = () => {
  const currentThemeLabel = useSelector(getTheme);

  const currentTheme = mapThemes[currentThemeLabel];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export { ThemedApp };
