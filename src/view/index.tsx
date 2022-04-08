import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '../clients/axios/instance';
import { ThemedApp } from './ThemedApp';
import { RenderApp } from './types';

const renderApp: RenderApp = (store) => {
  init(store);
  const app = (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );

  const APP_NODE = document.getElementById('app');
  render(app, APP_NODE);
};

export { renderApp };
