import { put, takeEvery } from 'redux-saga/effects';
import { configureLocalStorage } from 'helpers/localStorage/configureLocalStorage';
import { authActions } from './actions';
import { LoginResponseData } from '../../types/Auth';

function* loginSaga({ payload }: ReturnType<typeof authActions.login>) {
  // eslint-disable-next-line no-console
  console.log(payload);
  yield put(authActions.loginLoading());
  try {
    const loginData: LoginResponseData = yield {
      success: true,
      token: 'accessToken',
    };
    configureLocalStorage(loginData.token);
    yield put(authActions.loginSuccess(loginData));
  } catch {
    yield put(authActions.loginFailure({ message: '' }));
  }
}

function* authSaga() {
  yield takeEvery(authActions.login.type, loginSaga);
}

export { authSaga };
