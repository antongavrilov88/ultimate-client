import { put, takeEvery } from 'redux-saga/effects';
import { resetLocalStorage } from 'helpers/localStorage';
import { call } from 'ramda';
import { configureLocalStorageToken } from 'helpers/localStorage/configureLocalStorage';
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
    yield call(configureLocalStorageToken, loginData.token);
    yield put(authActions.loginSuccess(loginData));
  } catch ({ message }) {
    yield put(authActions.loginFailure({ message: `${message}` }));
  }
}

function* resetAuthSaga() {
  try {
    yield call(resetLocalStorage);
    yield put(authActions.resetAuthState());
  } catch ({ message }) {
    yield put(authActions.logoutFailure({ message: `${message}` }));
  }
}

function* logoutSaga() {
  yield put(authActions.logoutLoading());
  try {
    /**
     * Здесь будет вызов метода logout с бэка
     */
    yield put(authActions.resetAuth());
  } catch ({ message }) {
    yield put(authActions.logoutFailure({ message: `${message}` }));
  }
}

function* authSaga() {
  yield takeEvery(authActions.login.type, loginSaga);
  yield takeEvery(authActions.resetAuth.type, resetAuthSaga);
  yield takeEvery(authActions.logout.type, logoutSaga);
}

export { authSaga };
