import { RouteProps } from 'react-router';
import { Route } from '../types';

type AppRouteOwnProps = Route & RouteProps;

// в дальнейшем будет приходить из редакса
interface AppRouteStoreProps {
  isAuthorised: boolean;
}

type AppRouteProps = AppRouteOwnProps & AppRouteStoreProps;

export { AppRouteOwnProps, AppRouteProps, AppRouteStoreProps };
