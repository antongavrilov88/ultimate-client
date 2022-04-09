import React from 'react';

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../style/themes/darkTheme';

const renderWithThemeProvider = (element: JSX.Element) =>
  render(
    <ThemeProvider theme={darkTheme}>
      <>{element}</>
    </ThemeProvider>
  );

export { renderWithThemeProvider };
