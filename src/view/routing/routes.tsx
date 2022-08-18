import React from 'react';
import { Route } from 'view/routing/types';
import { PATH } from 'shared/constants';
import { Main } from 'view/pages/Main';
import { Login } from 'view/pages/Login';
import { Register } from 'view/pages/Register';
import { Components } from 'view/pages/Components';

const routes: Route[] = [
  { path: PATH.MAIN, element: <Main />, exact: true },
  { path: PATH.LOGIN, element: <Login />, exact: true },
  { path: PATH.REGISTER, element: <Register />, exact: true },
  { path: PATH.COMPONENTS, element: <Components />, exact: true },
];

export { routes };
