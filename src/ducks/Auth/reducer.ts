/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { authActions } from './actions';
import { REQUEST_STATUS } from '../../shared/constants';

const initialState: AuthState = {
  status: REQUEST_STATUS.STILL,
  success: false,
  token: null,
  email: null,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.registerLoading, (state) => {
    state.status = REQUEST_STATUS.LOADING;
    state.token = initialState.token;
    state.success = initialState.success;
    state.email = initialState.email;
    state.error = initialState.error;
  });
  builder.addCase(authActions.registerSuccess, (state, { payload }) => {
    state.status = REQUEST_STATUS.SUCCESS;
    state.success = true;
    state.token = payload.token;
    state.email = payload.email;
  });
  builder.addCase(authActions.registerFailure, (state, { payload }) => {
    state.status = REQUEST_STATUS.FAILURE;
    state.error = payload;
  });

  builder.addCase(authActions.loginLoading, (state) => {
    state.status = REQUEST_STATUS.LOADING;
  });
  builder.addCase(authActions.loginSuccess, (state, { payload }) => {
    state.status = REQUEST_STATUS.SUCCESS;
    state.success = true;
    state.token = payload.token;
    state.email = payload.email;
  });
  builder.addCase(authActions.loginFailure, (state, { payload }) => {
    state.status = REQUEST_STATUS.FAILURE;
    state.error = payload;
  });

  builder.addCase(authActions.logoutLoading, (state) => {
    state.status = REQUEST_STATUS.LOADING;
  });
  builder.addCase(authActions.logoutSuccess, (state) => {
    state.status = REQUEST_STATUS.SUCCESS;
  });
  builder.addCase(authActions.logoutFailure, (state, { payload }) => {
    state.status = REQUEST_STATUS.FAILURE;
    state.error = payload;
  });

  builder.addCase(authActions.setToken, (state, { payload }) => {
    state.status = REQUEST_STATUS.SUCCESS;
    state.token = payload;
    state.success = true;
  });

  builder.addCase(authActions.setEmail, (state, { payload }) => {
    state.email = payload;
  });

  builder.addCase(authActions.resetAuthError, (state) => {
    state.status = initialState.status;
    state.error = initialState.error;
  });

  builder.addCase(authActions.resetAuthState, (state) => {
    state.status = initialState.status;
    state.token = initialState.token;
    state.success = initialState.success;
    state.email = initialState.email;
    state.error = initialState.error;
  });
});

export { authReducer };
