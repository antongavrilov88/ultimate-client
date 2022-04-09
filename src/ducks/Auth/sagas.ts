import { put, takeEvery } from 'redux-saga/effects';
import { authActions } from './actions';
import { LoginResponseData } from '../../types/Auth';

const TEST_USER_ID = 777;

function* loginSaga({ payload }: ReturnType<typeof authActions.login>) {
  // eslint-disable-next-line no-console
  console.log(payload);
  yield put(authActions.loginLoading());
  try {
    const loginData: LoginResponseData = yield {
      success: true,
      token: 'accessToken',
      user: {
        id: TEST_USER_ID,
        username: 'AG - awesome developer',
        email: 'antongavrilov77@yandex.ru',
      },
    };
    yield put(authActions.loginSuccess(loginData));
  } catch {
    yield put(authActions.loginFailure({ message: '' }));
  }
}

function* authSaga() {
  yield takeEvery(authActions.login.type, loginSaga);
}

export { authSaga };
