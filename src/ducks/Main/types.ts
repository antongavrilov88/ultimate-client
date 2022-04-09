import { Requestable } from 'types/Requestable';
import { UI_THEMES } from 'enums/uiEnums';
import { Nullable } from 'types/utils';
import { RequestStatus } from 'shared/constants';
import { DefaultAppError } from 'types/errors/AppError';
export interface MainState {
  exampleState: {
    status: RequestStatus;
    data: Nullable<string>;
    error: Nullable<DefaultAppError>;
  };
  theme: UI_THEMES;
}
