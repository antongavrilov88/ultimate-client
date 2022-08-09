import { RequestStatus } from '../../../shared/constants';
import { DefaultAppError } from '../../../types/errors/AppError';
import { RegisterRequestData } from '../../../types/app/Auth';
import { Nullable } from '../../../types/utils';

interface StateProps {
  email?: Nullable<string>;
}

interface DispatchProps {
  onLogout: () => void;
}

export { StateProps, DispatchProps };
