import { mainAction } from '../actions';
import { MAIN } from '../constants';
import { TEST_DATA_NUMBER, TEST_DATA_STRING, TEST_ERROR_MESSAGE } from './constants';

describe('Main action creators должны создавать корректные actions', () => {
  test('mainAction.mainInit должен генерировать корректный action', () => {
    const action = mainAction.init({ someParams: TEST_DATA_NUMBER });
    const expectedAction = {
      type: MAIN.MAIN_INIT,
      payload: {
        someparams: TEST_DATA_NUMBER,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.someParams).toEqual(expectedAction.payload.someparams);
  });

  test('mainAction.mainLoading должен генерировать корректный action', () => {
    const action = mainAction.loading();
    const expectedAction = {
      type: MAIN.MAIN_LOADING,
      payload: undefined,
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  test('mainAction.mainSuccess должен генерировать корректный action', () => {
    const action = mainAction.success({ someData: TEST_DATA_STRING });
    const expectedAction = {
      type: MAIN.MAIN_SUCCESS,
      payload: {
        someData: TEST_DATA_STRING,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.someData).toEqual(expectedAction.payload.someData);
  });

  test('mainAction.mainFailure должен генерировать корректный action', () => {
    const action = mainAction.failure({ message: TEST_ERROR_MESSAGE });
    const expectedAction = {
      type: MAIN.MAIN_FAILURE,
      payload: {
        message: TEST_ERROR_MESSAGE,
      },
    };
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload.message).toEqual(expectedAction.payload.message);
  });
});
