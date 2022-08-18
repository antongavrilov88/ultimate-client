import { authActions } from '../actions';
import { TEST_EMAIL, TEST_ID, TEST_PASSWORD, TEST_TOKEN } from './constants';
import { AUTH } from '../constants';

describe('Auth actions creators должны создавать корректные actions', () => {
  test('registerAction.login должен генерировать корректный action', () => {
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

  test('registerAction.loginLoading должен генерировать корректный action', () => {
    const action = authActions.loginLoading();
    const expectedAction = {
      type: AUTH.LOGIN_LOADING,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('registerAction.loginSuccess should generate corrct action', () => {
    const action = authActions.loginSuccess({
      id: TEST_ID,
      attributes: {
        email: TEST_EMAIL,
      },
      relationships: {
        token: {
          token: TEST_TOKEN,
        },
      },
    });
    const expectedAction = {
      type: AUTH.LOGIN_SUCCESS,
      payload: {
        id: TEST_ID,
        attributes: {
          email: TEST_EMAIL,
        },
        relationships: {
          token: {
            token: TEST_TOKEN,
          },
        },
      },
    };
    expect(action.type).toEqual(expectedAction.type);
  });

  test('registerAction.register должен генерировать корректный action', () => {
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
});
