/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { MainState } from './types';
import { mainAction } from './actions';
import { REQUEST_STATUS } from '../../shared/constants';
import { UI_THEMES } from '../../enums/uiEnums';

const initialState: MainState = {
  exampleState: {
    status: REQUEST_STATUS.STILL,
    data: null,
    error: null,
  },
  theme: UI_THEMES.DARK,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(mainAction.loading, (state) => {
    state.exampleState.status = REQUEST_STATUS.LOADING;
  });

  builder.addCase(mainAction.success, (state, { payload }) => {
    state.exampleState.status = REQUEST_STATUS.SUCCESS;
    state.exampleState.data = payload.someData;
  });

  builder.addCase(mainAction.setTheme, (state, { payload }) => {
    state.theme = payload;
  });
});

export { mainReducer };
