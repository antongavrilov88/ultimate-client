import React from 'react';
import { render } from 'react-dom';
import { init } from '../clients/axios/instance';
import { Button } from './components/Button';
import { RenderApp } from './types';

const renderApp: RenderApp = (store) => {
  init(store);
  const app = <Button />;

  const APP_NODE = document.getElementById('app');
  render(app, APP_NODE);
};

export { renderApp };
