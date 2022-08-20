import { getContext, put, takeEvery } from 'redux-saga/effects';
import { resetLocalStorage } from 'helpers/localStorage';
import { call } from 'ramda';
import {
  configureLocalStorageEmail,
  configureLocalStorageToken,
} from 'helpers/localStorage/configureLocalStorage';
import { authActions } from './actions';
import { LoginResponseData, RegisterResponseData } from '../../types/app/Auth';
import { AbstractLogic } from '../../logic';

function* loginSaga({ payload }: ReturnType<typeof authActions.login>) {
  const { auth }: AbstractLogic = yield getContext('logic');
  yield put(authActions.loginLoading());
  try {
    const loginData: LoginResponseData = yield call(auth.login, payload);
    yield call(configureLocalStorageToken, loginData.token);
    yield call(configureLocalStorageEmail, loginData.email);
    yield put(authActions.loginSuccess(loginData));
  } catch ({ message }) {
    yield put(authActions.loginFailure({ message: `${message}` }));
  }
}

function* registerSaga({ payload }: ReturnType<typeof authActions.register>) {
  yield put(authActions.registerLoading());
  try {
    const { auth }: AbstractLogic = yield getContext('logic');
    const registerData: RegisterResponseData = yield call(auth.register, payload);
    yield put(authActions.registerSuccess(registerData));
    yield call(configureLocalStorageToken, registerData.token);
    yield call(configureLocalStorageEmail, registerData.email);
  } catch ({ message }) {
    yield put(authActions.registerFailure({ message: `${message}` }));
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
    const { auth }: AbstractLogic = yield getContext('logic');
    yield call(auth.logout);
    yield put(authActions.logoutSuccess());
    yield put(authActions.resetAuth());
  } catch ({ message }) {
    yield put(authActions.logoutFailure({ message: `${message}` }));
  }
}

function* authSaga() {
  yield takeEvery(authActions.login.type, loginSaga);
  yield takeEvery(authActions.resetAuth.type, resetAuthSaga);
  yield takeEvery(authActions.logout.type, logoutSaga);
  yield takeEvery(authActions.register.type, registerSaga);
}

export { authSaga };
