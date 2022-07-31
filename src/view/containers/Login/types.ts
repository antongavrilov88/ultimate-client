import { RequestStatus } from '../../../shared/constants';
import { DefaultAppError } from '../../../types/errors/AppError';
import { RegisterRequestData } from '../../../types/app/Auth';
import { Nullable } from '../../../types/utils';

interface StateProps {
  requestStatus: RequestStatus;
  requestError: Nullable<DefaultAppError>;
}

interface DispatchProps {
  loginUser: (input: RegisterRequestData) => void;
  resetError: () => void;
}

export { StateProps, DispatchProps };
