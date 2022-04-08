import React from 'react';
import { render } from 'react-dom';
import { Button } from './components/Button';
import { RenderApp } from './types';

const renderApp: RenderApp = () => {
  const app = <Button />;

  const APP_NODE = document.getElementById('app');
  render(app, APP_NODE);
};

export { renderApp };
