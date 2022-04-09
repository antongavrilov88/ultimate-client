import { all } from 'redux-saga/effects';
import { authSaga } from './Auth/sagas';
import { mainSaga } from './Main/sagas';

function* rootSaga() {
  yield all([mainSaga(), authSaga()]);
}

export { rootSaga };
