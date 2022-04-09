import { all } from 'redux-saga/effects';
import { mainSaga } from './Main/sagas';

function* rootSaga() {
  yield all([mainSaga()]);
}

export { rootSaga };
