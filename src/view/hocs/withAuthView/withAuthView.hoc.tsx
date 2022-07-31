import { useAuthStatus } from 'hooks';
import React, { useMemo } from 'react';
import { Login } from '../../containers/Login';

function withAuthView<ComponentProps>(
  Component: React.FC<ComponentProps>
): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => {
    const isAuthorised = useAuthStatus();
    const renderedContent = useMemo(() => {
      if (!isAuthorised) return <Login />;
      return <Component {...props} />;
    }, [isAuthorised]);

    return <>{renderedContent}</>;
  };
  return WrappedComponent;
}

export { withAuthView };
