import { Route } from 'view/routing/types';
import { Path } from 'shared/constants';
import { Main } from 'view/pages/Main';
import { Login } from 'view/pages/Login';
import React from 'react';

const routes: Route[] = [
  { path: Path.MAIN, element: <Main />, exact: true },
  { path: Path.LOGIN, element: <Login />, exact: true },
];

export { routes };
