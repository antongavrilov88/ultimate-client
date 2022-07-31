import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Path } from 'shared/constants';
import { AppRouteProps } from './types';
import { getAuthStatus } from '../../../ducks/Auth/selectors';
import { Login } from '../../pages/Login';

const AppRouteView: React.FC<AppRouteProps> = (props) => {
  // const { isAuthorised, ...restProps } = props;

  const isAuthorised = useSelector(getAuthStatus);
  // в дальнейшем будет редирект на страницу логина
  if (!isAuthorised) return <Route path={Path.LOGIN} element={Login} />;
  return <Route {...props} />;
};

export { AppRouteView };
