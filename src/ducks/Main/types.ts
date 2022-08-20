import { UI_THEMES } from 'enums/uiEnums';
import { Nullable } from 'types/utils';
import { REQUEST_STATUS } from 'shared/constants';
import { DefaultAppError } from 'types/errors/AppError';
export interface MainState {
  exampleState: {
    status: REQUEST_STATUS;
    data: Nullable<string>;
    error: Nullable<DefaultAppError>;
  };
  theme: UI_THEMES;
}
