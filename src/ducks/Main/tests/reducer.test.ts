import { UI_THEMES } from 'enums/uiEnums';
import { REQUEST_STATUS } from 'shared/constants';
import { MAIN } from '../constants';
import { mainReducer } from '../reducer';
import { MainState } from '../types';
import { TEST_DATA_STRING } from './constants';

describe('Main reducer', () => {
  const initMainState: MainState = {
    exampleState: {
      status: REQUEST_STATUS.STILL,
      data: null,
      error: null,
    },
    theme: UI_THEMES.DARK,
  };

  test('Должен вызывать initMainState при пустом action', () => {
    const newState = mainReducer(undefined, {} as any);
    expect(newState).toEqual(initMainState);
  });

  describe('должен корректно обрабатывать mainActions', () => {
    test('setTheme', () => {
      const action = {
        type: MAIN.SET_THEME,
        payload: UI_THEMES.LIGHT,
      };
      const newState = mainReducer(initMainState, action);
      const expectedState = {
        ...initMainState,
        theme: UI_THEMES.LIGHT,
      };

      expect(newState).toEqual(expectedState);
    });

    test('loading', () => {
      const action = {
        type: MAIN.MAIN_LOADING,
      };
      const newState = mainReducer(initMainState, action);

      const expectedState = {
        ...initMainState,
        exampleState: {
          ...initMainState.exampleState,
          status: REQUEST_STATUS.LOADING,
        },
      };
      expect(newState).toEqual(expectedState);
    });

    test('success', () => {
      const action = {
        type: MAIN.MAIN_SUCCESS,
        payload: {
          someData: TEST_DATA_STRING,
        },
      };
      const newState = mainReducer(initMainState, action);

      const expectedState = {
        ...initMainState,
        exampleState: {
          ...initMainState.exampleState,
          status: REQUEST_STATUS.SUCCESS,
          data: TEST_DATA_STRING,
        },
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
