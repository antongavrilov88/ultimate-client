import { authActions } from '../actions';
import { TEST_EMAIL, TEST_ERROR, TEST_ID, TEST_PASSWORD, TEST_TOKEN } from './constants';
import { AUTH } from '../constants';

/**
 * authAction action-creators tests
 */

describe('Auth actions creators should generate correct actions', () => {
  /**
   * action creators related to login-actions tests
   */

  test('authActions.login should generate correct action', () => {
    const action = authActions.login({ email: TEST_EMAIL, password: TEST_PASSWORD });
    const expectedAction = {
      type: AUTH.LOGIN,
      payload: {
        email: TEST_EMAIL,
        password: TEST_PASSWORD,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.email).toEqual(expectedAction.payload.email);
    expect(action.payload.password).toEqual(expectedAction.payload.password);
  });

  test('authActions.loginLoading should generate correct action', () => {
    const action = authActions.loginLoading();
    const expectedAction = {
      type: AUTH.LOGIN_LOADING,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('authActions.loginSuccess should generate correct action', () => {
    const action = authActions.loginSuccess({
      id: TEST_ID,
      email: TEST_EMAIL,
      token: TEST_TOKEN,
    });
    const expectedAction = {
      type: AUTH.LOGIN_SUCCESS,
      payload: {
        id: TEST_ID,
        email: TEST_EMAIL,
        token: TEST_TOKEN,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.id).toEqual(expectedAction.payload.id);
    expect(action.payload.email).toEqual(expectedAction.payload.email);
    expect(action.payload.token).toEqual(expectedAction.payload.token);
  });

  test('authActions.loginFailure should generate correct action', () => {
    const action = authActions.loginFailure(TEST_ERROR);
    const expectedAction = {
      type: AUTH.LOGIN_FAILURE,
      payload: TEST_ERROR,
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.message).toEqual(TEST_ERROR.message);
  });

  /**
   * action creators related to register-actions tests
   */

  test('authActions.register should generate correct action', () => {
    const action = authActions.register({ email: TEST_EMAIL, password: TEST_PASSWORD });
    const expectedAction = {
      type: AUTH.REGISTER,
      payload: {
        email: TEST_EMAIL,
        password: TEST_PASSWORD,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.email).toEqual(expectedAction.payload.email);
    expect(action.payload.password).toEqual(expectedAction.payload.password);
  });

  test('authActions.registerLoading should generate correct action', () => {
    const action = authActions.registerLoading();
    const expectedAction = {
      type: AUTH.REGISTER_LOADING,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('authActions.registerSuccess should generate correct action', () => {
    const action = authActions.registerSuccess({
      id: TEST_ID,
      email: TEST_EMAIL,
      token: TEST_TOKEN,
    });
    const expectedAction = {
      type: AUTH.REGISTER_SUCCESS,
      payload: {
        id: TEST_ID,
        email: TEST_EMAIL,
        token: TEST_TOKEN,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.id).toEqual(expectedAction.payload.id);
    expect(action.payload.email).toEqual(expectedAction.payload.email);
    expect(action.payload.token).toEqual(expectedAction.payload.token);
  });

  test('authActions.registerFailure should generate correct action', () => {
    const action = authActions.registerFailure(TEST_ERROR);
    const expectedAction = {
      type: AUTH.REGISTER_FAILURE,
      payload: TEST_ERROR,
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.message).toEqual(TEST_ERROR.message);
  });

  /**
   * logout actions tests
   */

  test('authActions.logout should generate correct action', () => {
    const action = authActions.logout();
    const expectedAction = {
      type: AUTH.LOGOUT,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('authActions.logoutLoading should generate correct action', () => {
    const action = authActions.logoutLoading();
    const expectedAction = {
      type: AUTH.LOGOUT_LOADING,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('authActions.logoutSuccess should generate correct action', () => {
    const action = authActions.logoutSuccess();
    const expectedAction = {
      type: AUTH.LOGOUT_SUCCESS,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('authActions.logoutFailure should generate correct action', () => {
    const action = authActions.logoutFailure(TEST_ERROR);
    const expectedAction = {
      type: AUTH.LOGOUT_FAILURE,
      payload: TEST_ERROR,
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.message).toEqual(TEST_ERROR.message);
  });
});
