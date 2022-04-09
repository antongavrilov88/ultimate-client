/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { authActions } from './actions';
import { RequestStatus } from '../../shared/constants';

const initialState: AuthState = {
  status: RequestStatus.STILL,
  success: false,
  token: null,
  user: {
    id: null,
    username: null,
    email: null,
  },
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.loginLoading, (state) => {
    state.status = RequestStatus.LOADING;
  });
  builder.addCase(authActions.loginSuccess, (state, { payload }) => {
    state.status = RequestStatus.SUCCESS;
    state.token = payload.token || null;
    state.success = payload.success;
    state.user.username = payload.user.username || null;
    state.user.id = payload.user.id || null;
    state.user.email = payload.user.email || null;
  });
  builder.addCase(authActions.loginFailure, (state) => {
    state.status = RequestStatus.FAILURE;
  });

  builder.addCase(authActions.resetAuthState, (state) => {
    state.status = initialState.status;
    state.token = initialState.token;
    state.success = initialState.success;
    state.user.username = initialState.user.username;
    state.user.id = initialState.user.id;
    state.user.email = initialState.user.email;
  });
});

export { authReducer };
