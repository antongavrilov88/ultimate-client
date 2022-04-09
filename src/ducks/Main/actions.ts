import { createAction } from '@reduxjs/toolkit';
import { DefaultAppError } from '../../types/errors/AppError';
import { ExampleData, ExampleRequest } from '../../types/Example';
import { UI_THEMES } from '../../enums/uiEnums';
import { MAIN } from './constants';

const mainAction = {
  init: createAction<ExampleRequest>(MAIN.MAIN_INIT),
  loading: createAction(MAIN.MAIN_LOADING),
  success: createAction<ExampleData>(MAIN.MAIN_SUCCESS),
  failure: createAction<DefaultAppError>(MAIN.MAIN_FAILURE),

  setTheme: createAction<UI_THEMES>(MAIN.SET_THEME),
};

export { mainAction };
