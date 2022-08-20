import { AppError } from './errors/AppError';
import { REQUEST_STATUS } from 'shared/constants';
import { Hash, Nullable } from './utils';

export interface Request<Data extends any = null, ErrorData extends Hash = Hash> {
  data: Nullable<Data>;
  status: REQUEST_STATUS;
  error: AppError<ErrorData>;
}

export interface StillRequestableWithData<Data extends any = null> extends Request<Data> {
  data: Data;
  status: REQUEST_STATUS.STILL;
  error: null;
}

export interface StillRequestableWithoutData extends Request {
  data: null;
  status: REQUEST_STATUS.STILL;
  error: null;
}

export interface LoadingRequestable extends Request {
  data: null;
  status: REQUEST_STATUS.LOADING;
  error: null;
}

export interface LoadingRequestableWithData<Data extends any = null> extends Request<Data> {
  data: Data;
  status: REQUEST_STATUS.LOADING;
  error: null;
}

export interface SuccessRequestable<Data extends any = null> extends Request<Data> {
  data: Data;
  status: REQUEST_STATUS.SUCCESS;
  error: null;
}

export interface FailedRequestable<Data extends any = null, ErrorData extends Hash = Hash>
  extends Request<Data> {
  data: Data;
  status: REQUEST_STATUS.FAILURE;
  error: ErrorData;
}

export type Requestable<Data extends any = null, ErrorData extends Hash = Hash> =
  | StillRequestableWithoutData
  | LoadingRequestable
  | LoadingRequestableWithData<Data>
  | SuccessRequestable<Data>
  | FailedRequestable<Data, ErrorData>;

export type RequestableWithInitialData<Data extends any = null, ErrorData extends Hash = Hash> =
  | StillRequestableWithData<Data>
  | LoadingRequestable
  | LoadingRequestableWithData<Data>
  | SuccessRequestable<Data>
  | FailedRequestable<Data, ErrorData>;
