import { Nullable } from '../../types/utils';
import { REQUEST_STATUS } from '../../shared/constants';
import { DefaultAppError } from '../../types/errors/AppError';

export type AccessToken = Nullable<string>;
export type UsersEmail = Nullable<string>;

export interface AuthState {
  status: REQUEST_STATUS;
  success: boolean;
  token: AccessToken;
  email: UsersEmail;
  error: Nullable<DefaultAppError>;
}
