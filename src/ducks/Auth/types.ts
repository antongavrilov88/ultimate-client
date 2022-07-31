import * as actions from './actions';
import { Nullable } from '../../types/utils';
import { RequestStatus } from '../../shared/constants';
import { DefaultAppError } from '../../types/errors/AppError';

export type AccessToken = Nullable<string>;
export type UsersEmail = Nullable<string>;

export interface AuthState {
  status: RequestStatus;
  success: boolean;
  token: AccessToken;
  email: UsersEmail;
  error: Nullable<DefaultAppError>;
}
