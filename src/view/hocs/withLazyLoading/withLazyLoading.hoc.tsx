import React from 'react';

function withLazyLoading<ComponentProps>(
  Component: React.FC<ComponentProps>
): React.FC<ComponentProps> {
  const WrappedComponent: React.FC<ComponentProps> = (props) => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
  WrappedComponent.displayName = `WithLazyLoading`;

  return WrappedComponent;
}

export { withLazyLoading };
