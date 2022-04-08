import { getContext, put, call, takeLatest } from 'redux-saga/effects';
import { AbstractLogic } from '../../../logic';
import { ExampleData } from '../../../types/Example';
import { mainAction } from './actions';

function* mainExampleSaga({ payload }: ReturnType<typeof mainAction.main>) {
  const { main }: AbstractLogic = yield getContext('logic');
  try {
    const data: ExampleData = yield call(main.main, payload);
    // request result
    // eslint-disable-next-line no-console
    console.log(data);
    const exampleData = { someData: 'Example data' };
    yield put(mainAction.success(exampleData));
  } catch {
    yield put(mainAction.failure({ message: '' }));
  }
}

function* mainSaga() {
  yield takeLatest(mainAction.loading.type, mainExampleSaga);
}

export { mainSaga };
