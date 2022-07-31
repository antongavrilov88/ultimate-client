import { useAuthStatus } from 'hooks';
import React, { useMemo } from 'react';
import { Main } from '../../pages/Main';

function withUnauthViewHoc<ComponentProps>(
  Component: React.FC<ComponentProps>
): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => {
    const isAuthorised = useAuthStatus();
    const renderedContent = useMemo(() => {
      if (isAuthorised) return <Main />;
      return <Component {...props} />;
    }, [isAuthorised]);

    return <>{renderedContent}</>;
  };
  return WrappedComponent;
}

export { withUnauthViewHoc };
