import React from 'react';
import { ThemeProvider } from 'styled-components';
// import { defaultTheme } from '../src/style/theme';
import { GlobalStyle } from '../src/style/global';

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
  <>
      <GlobalStyle />
      <Story />
  </>
);

const decorators = [styledDecorator];

export { parameters, decorators };
