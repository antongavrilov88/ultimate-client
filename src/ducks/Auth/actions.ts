import { createAction } from '@reduxjs/toolkit';
import { AUTH } from './constants';
import {
  LoginRequestData,
  LoginResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from '../../types/app/Auth';
import { DefaultAppError } from '../../types/errors/AppError';
import { AccessToken } from './types';
import { Nullable } from '../../types/utils';

const authActions = {
  login: createAction<LoginRequestData>(AUTH.LOGIN),
  loginLoading: createAction(AUTH.LOGIN_LOADING),
  loginSuccess: createAction<LoginResponseData>(AUTH.LOGIN_SUCCESS),
  loginFailure: createAction<DefaultAppError>(AUTH.LOGIN_FAILURE),

  register: createAction<RegisterRequestData>(AUTH.REGISTER),
  registerLoading: createAction(AUTH.REGISTER_LOADING),
  registerSuccess: createAction<RegisterResponseData>(AUTH.REGISTER_SUCCESS),
  registerFailure: createAction<DefaultAppError>(AUTH.REGISTER_FAILURE),

  logout: createAction(AUTH.LOGOUT),
  logoutLoading: createAction(AUTH.LOGOUT_LOADING),
  logoutSuccess: createAction(AUTH.LOGOUT_SUCCESS),
  logoutFailure: createAction<DefaultAppError>(AUTH.LOGOUT_FAILURE),

  resetAuth: createAction(AUTH.RESET_AUTH),

  setToken: createAction<AccessToken>(AUTH.SET_TOKEN),

  setEmail: createAction<Nullable<string>>(AUTH.SET_EMAIL),

  resetAuthError: createAction(AUTH.RESET_AUTH_ERROR),

  resetAuthState: createAction(AUTH.RESET_AUTH_STATE),
};

export { authActions };
