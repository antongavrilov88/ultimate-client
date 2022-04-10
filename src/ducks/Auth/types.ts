import * as actions from './actions';
import { Nullable } from '../../types/utils';
import { RequestStatus } from '../../shared/constants';

export type AccessToken = Nullable<string>;

export interface AuthState {
  status: RequestStatus;
  success: boolean;
  token: AccessToken;
}
