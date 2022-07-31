import { authActions } from '../actions';
import { TEST_EMAIL, TEST_PASSWORD } from './constants';
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
});
