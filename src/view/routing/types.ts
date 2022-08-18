import React from 'react';
import { PATH } from 'shared/constants';

export interface Route {
  path: PATH;
  element: any;
  exact?: boolean;
}
