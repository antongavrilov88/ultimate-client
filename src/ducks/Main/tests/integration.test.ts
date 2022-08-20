import { UI_THEMES } from 'enums/uiEnums';
import { getMockedContext } from 'helpers/redux/tests/sagaMockedProviders';
import { REQUEST_STATUS } from 'shared/constants';
import { expectSaga } from 'redux-saga-test-plan';
import { EffectProviders } from 'redux-saga-test-plan/providers';
import { MainState } from '../types';
import { TEST_DATA_NUMBER, TEST_DATA_STRING } from './constants';
import { mainSaga } from '../sagas';
import { mainReducer } from '../reducer';
import { MAIN } from '../constants';

describe('Example', () => {
  const exampleInitPayload = { someParams: TEST_DATA_NUMBER };
  const exampleApiCallResponse = {
    someData: TEST_DATA_STRING,
  };
  const main = jest.fn();
  const logic = { main: { main } };
  const mockedGetContext = getMockedContext({ logic });

  const initMainState: MainState = {
    exampleState: {
      status: REQUEST_STATUS.STILL,
      data: null,
      error: null,
    },
    theme: UI_THEMES.DARK,
  };

  test('Должен корректно обработать example', () => {
    const mockedCall: EffectProviders['call'] = ({ fn }, next) => {
      if (fn === main) return exampleApiCallResponse;
      return next();
    };

    const expectedFinalState: MainState = {
      ...initMainState,
      exampleState: {
        ...initMainState.exampleState,
        status: REQUEST_STATUS.SUCCESS,
        data: TEST_DATA_STRING,
      },
    };

    return expectSaga(mainSaga)
      .withReducer(mainReducer, initMainState)
      .provide({ getContext: mockedGetContext, call: mockedCall })
      .dispatch({ type: MAIN.MAIN_INIT, payload: exampleInitPayload })
      .hasFinalState(expectedFinalState)
      .silentRun();
  });
});
