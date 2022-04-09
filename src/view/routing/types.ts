import React from 'react';
import { Path } from 'shared/constants';

export interface Route {
  path: Path;
  element: any;
  exact?: boolean;
}
