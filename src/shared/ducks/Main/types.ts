import * as actions from './actions';
import { Requestable } from 'types/Requestable';
import { UI_THEMES } from 'enums/uiEnums';

export interface MainState {
  exampleState: Requestable<string>;
  theme: UI_THEMES;
}
