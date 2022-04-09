import { getContext, put, call, takeLatest } from 'redux-saga/effects';
import { AbstractLogic } from '../../logic';
import { ExampleData } from '../../types/Example';
import { mainAction } from './actions';

function* mainExampleSaga({ payload }: ReturnType<typeof mainAction.init>) {
  const { main }: AbstractLogic = yield getContext('logic');
  yield put(mainAction.loading());
  try {
    const data: ExampleData = yield call(main.main, payload);
    yield put(mainAction.success(data));
  } catch ({ message }) {
    yield put(mainAction.failure({ message: `${message}` }));
  }
}

function* mainSaga() {
  yield takeLatest(mainAction.init.type, mainExampleSaga);
}

export { mainSaga };
