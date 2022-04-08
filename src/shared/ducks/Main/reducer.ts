/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { MainState } from './types';
import { mainAction } from './actions';
import { RequestStatus } from '../../constants';
import { UI_THEMES } from '../../../enums/uiEnums';

const initialState: MainState = {
  exampleState: {
    status: RequestStatus.STILL,
    data: null,
    error: null,
  },
  theme: UI_THEMES.DARK,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(mainAction.setTheme, (state, { payload }) => {
    state.theme = payload;
  });
});

export { mainReducer };
