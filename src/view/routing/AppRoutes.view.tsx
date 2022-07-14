import React, { useMemo } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';
import { routes } from './routes';
import { NotFoundError } from '../components/NotFoundError';

const AppRoutesView: React.FC = () => {
  const location = useLocation();

  const isRoutValid = useMemo(
    () => routes.filter((rout) => rout.path === location.pathname).length !== 0,
    [location]
  );

  const renderedContent = useMemo(() => {
    const renderRoutes = routes.map((route) => <Route key={route.path} {...route} />);
    return isRoutValid ? <Routes location={location}>{renderRoutes}</Routes> : <NotFoundError />;
  }, [location, isRoutValid]);

  return <>{renderedContent}</>;
};

AppRoutesView.displayName = 'AppRoutes';

export { AppRoutesView };
