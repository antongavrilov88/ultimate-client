import { Nullable } from '../../../types/utils';

interface StateProps {
  email?: Nullable<string>;
}

interface DispatchProps {
  onLogout: () => void;
}

export { StateProps, DispatchProps };
