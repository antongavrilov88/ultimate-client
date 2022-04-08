import { Hash, Nullable } from 'types/utils';

export interface DefaultAppError {
  message: string;
}

export type AppError<ErrorData extends Hash = DefaultAppError> = Nullable<ErrorData>;
