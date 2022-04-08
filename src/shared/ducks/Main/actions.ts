import { createAction } from '@reduxjs/toolkit';
import { DefaultAppError } from '../../../types/errors/AppError';
import { ExampleData, ExampleRequest } from '../../../types/Example';
import { UI_THEMES } from '../../../enums/uiEnums';
import { MAIN } from './constants';

const mainAction = {
  main: createAction<ExampleRequest>(MAIN.MAIN),
  loading: createAction(MAIN.MAIN_LOADING),
  success: createAction<ExampleData>(MAIN.MAIN_LOADING),
  failure: createAction<DefaultAppError>(MAIN.MAIN_FAILURE),

  setTheme: createAction<UI_THEMES>(MAIN.SET_THEME),
};

export { mainAction };
