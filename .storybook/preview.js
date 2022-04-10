import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/global';
import { mapThemes } from '../src/style/themes'
import { UI_THEMES } from '../src/enums/uiEnums'

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const styledDecorator = (Story) => (
  <ThemeProvider theme={mapThemes[UI_THEMES.DARK]}>
      <GlobalStyle />
      <Story />
  </ThemeProvider>
);

const decorators = [styledDecorator];

export { parameters, decorators };
