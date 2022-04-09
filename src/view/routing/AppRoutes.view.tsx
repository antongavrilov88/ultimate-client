import React, { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { AppRoute } from "./AppRoute";
import { routes } from './routes';

const AppRoutesView: React.FC = () => {
  const location = useLocation();

  return useMemo(() => {
    const renderRoutes = routes.map((route) => <Route key={route.path} {...route} />);
    return <Routes location={location}>{renderRoutes}</Routes>;
  }, [location]);
};

AppRoutesView.displayName = 'AppRoutes';

export { AppRoutesView };
