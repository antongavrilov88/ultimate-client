import { getMockedContext } from 'helpers/redux/tests/sagaMockedProviders';
import { expectSaga } from 'redux-saga-test-plan';
import { EffectProviders } from 'redux-saga-test-plan/providers';
import { ExampleData } from 'types/Example';
import { MAIN } from '../constants';
import { mainSaga } from '../sagas';
import { TEST_DATA_NUMBER, TEST_DATA_STRING, TEST_ERROR_MESSAGE } from './constants';

describe('mainExampleSaga', () => {
  const exampleInitPayload = { someParams: TEST_DATA_NUMBER };
  const exampleApiCallResponse = {
    someData: TEST_DATA_STRING,
  };
  const main = jest.fn();
  const logic = { main: { main } };

  const mockedGetContext = getMockedContext({ logic });

  test('Должна работать корректно, если нет ошибок', () => {
    const mockedCall: EffectProviders['call'] = ({ fn }, next) => {
      if (fn === main) return exampleApiCallResponse;
      return next();
    };

    const expectedSuccessPayload: ExampleData = exampleApiCallResponse;

    return expectSaga(mainSaga)
      .provide({ getContext: mockedGetContext, call: mockedCall })
      .dispatch({ type: MAIN.MAIN_INIT, payload: exampleInitPayload })
      .put({ type: MAIN.MAIN_LOADING, payload: undefined })
      .call(main, exampleInitPayload)
      .put({ type: MAIN.MAIN_SUCCESS, payload: expectedSuccessPayload })
      .silentRun();
  });

  test('Должна перехватить ошибку и диспатчить корректный action', () => {
    const mockedCall: EffectProviders['call'] = ({ fn }, next) => {
      if (fn === main) throw new Error(TEST_ERROR_MESSAGE);
      return next();
    };

    const expectedErrorMessage = { message: TEST_ERROR_MESSAGE };

    return expectSaga(mainSaga)
      .provide({ getContext: mockedGetContext, call: mockedCall })
      .dispatch({ type: MAIN.MAIN_INIT, payload: exampleInitPayload })
      .put({ type: MAIN.MAIN_LOADING, payload: undefined })
      .call(main, exampleInitPayload)
      .put({ type: MAIN.MAIN_FAILURE, payload: expectedErrorMessage })
      .silentRun();
  });
});
