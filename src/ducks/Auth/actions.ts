import { createAction } from '@reduxjs/toolkit';
import { AUTH } from './constants';
import { LoginRequestData, LoginResponseData } from '../../types/Auth';
import { DefaultAppError } from '../../types/errors/AppError';
import { AccessToken } from './types';

const authActions = {
  login: createAction<LoginRequestData>(AUTH.LOGIN),
  loginLoading: createAction(AUTH.LOGIN_LOADING),
  loginSuccess: createAction<LoginResponseData>(AUTH.LOGIN_SUCCESS),
  loginFailure: createAction<DefaultAppError>(AUTH.LOGIN_FAILURE),

  setToken: createAction<AccessToken>(AUTH.SET_TOKEN),

  resetAuthState: createAction(AUTH.RESET_AUTH_STATE),
};

export { authActions };
