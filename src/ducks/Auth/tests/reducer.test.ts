import { REQUEST_STATUS } from 'shared/constants';
import { AUTH } from '../constants';
import { authReducer } from '../reducer';
import { AuthState } from '../types';
import {
  TEST_BOOL_FALSE,
  TEST_BOOL_TRUE,
  TEST_EMAIL,
  TEST_ERROR,
  TEST_ID,
  TEST_TOKEN,
} from './constants';

/**
 * auth-reducer tests
 */

describe('Auth reducer should update auth state-slice correctly', () => {
  const initAuthState: AuthState = {
    email: null,
    token: null,
    status: REQUEST_STATUS.STILL,
    success: TEST_BOOL_FALSE,
    error: null,
  };

  test('Should return initState if no action provided', () => {
    const newState = authReducer(undefined, {} as any);
    expect(newState).toEqual(initAuthState);
  });

  describe('Should handle login actions correctly', () => {
    test('Should handle loginLoading action correctly', () => {
      const action = {
        type: AUTH.LOGIN_LOADING,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.LOADING,
      };
      expect(newState).toEqual(expectedState);
    });

    test('Should handle loginSuccess action correctly', () => {
      const action = {
        type: AUTH.LOGIN_SUCCESS,
        payload: {
          id: TEST_ID,
          email: TEST_EMAIL,
          token: TEST_TOKEN,
        },
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.SUCCESS,
        email: TEST_EMAIL,
        token: TEST_TOKEN,
        success: TEST_BOOL_TRUE,
      };
      expect(newState).toEqual(expectedState);
    });

    test('Should handle loginFailure action correctly', () => {
      const action = {
        type: AUTH.LOGIN_FAILURE,
        payload: TEST_ERROR,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.FAILURE,
        error: TEST_ERROR,
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('Should handle register actions correctly', () => {
    test('Should handle registerLoading action correctly', () => {
      const action = {
        type: AUTH.REGISTER_LOADING,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.LOADING,
      };
      expect(newState).toEqual(expectedState);
    });

    test('should handle registerSuccess action correctly', () => {
      const action = {
        type: AUTH.REGISTER_SUCCESS,
        payload: {
          id: TEST_ID,
          email: TEST_EMAIL,
          token: TEST_TOKEN,
        },
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        email: TEST_EMAIL,
        token: TEST_TOKEN,
        success: TEST_BOOL_TRUE,
        status: REQUEST_STATUS.SUCCESS,
      };
      expect(newState).toEqual(expectedState);
    });

    test('Should handle registerFail action correctly', () => {
      const action = {
        type: AUTH.REGISTER_FAILURE,
        payload: TEST_ERROR,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.FAILURE,
        error: TEST_ERROR,
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('Should handle logout actions correctly', () => {
    test('Should handle logoutLoading action correctly', () => {
      const action = {
        type: AUTH.LOGOUT_LOADING,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.LOADING,
      };
      expect(newState).toEqual(expectedState);
    });

    test('Should handle logoutSuccess action correctly', () => {
      const action = {
        type: AUTH.LOGOUT_SUCCESS,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.SUCCESS,
      };
      expect(newState).toEqual(expectedState);
    });

    test('Should handle logoutFailure action correctly', () => {
      const action = {
        type: AUTH.LOGOUT_FAILURE,
        payload: TEST_ERROR,
      };
      const newState = authReducer(initAuthState, action);
      const expectedState: AuthState = {
        ...initAuthState,
        status: REQUEST_STATUS.FAILURE,
        error: TEST_ERROR,
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
