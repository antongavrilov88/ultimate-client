/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { authActions } from './actions';
import { RequestStatus } from '../../shared/constants';

const initialState: AuthState = {
  status: RequestStatus.STILL,
  success: false,
  token: null,
  email: null,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.registerLoading, (state) => {
    state.status = RequestStatus.LOADING;
    state.token = initialState.token;
    state.success = initialState.success;
    state.email = initialState.email;
    state.error = initialState.error;
  });
  builder.addCase(authActions.registerSuccess, (state, { payload }) => {
    state.status = RequestStatus.SUCCESS;
    state.success = true;
    state.token = payload.relationships.token.token;
    state.email = payload.attributes.email;
  });
  builder.addCase(authActions.registerFailure, (state, { payload }) => {
    state.status = RequestStatus.FAILURE;
    state.error = payload;
  });

  builder.addCase(authActions.loginLoading, (state) => {
    state.status = RequestStatus.LOADING;
  });
  builder.addCase(authActions.loginSuccess, (state, { payload }) => {
    state.status = RequestStatus.SUCCESS;
    state.success = true;
    state.token = payload.relationships.token.token;
    state.email = payload.attributes.email;
  });
  builder.addCase(authActions.loginFailure, (state, { payload }) => {
    state.status = RequestStatus.FAILURE;
    state.error = payload;
  });

  builder.addCase(authActions.setToken, (state, { payload }) => {
    state.status = RequestStatus.SUCCESS;
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
