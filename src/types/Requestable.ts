import { AppError } from './errors/AppError';
import { RequestStatus } from 'shared/constants';
import { Hash, Nullable } from './utils';

export interface Request<Data extends any = null, ErrorData extends Hash = Hash> {
  data: Nullable<Data>;
  status: RequestStatus;
  error: AppError<ErrorData>;
}

export interface StillRequestableWithData<Data extends any = null> extends Request<Data> {
  data: Data;
  status: RequestStatus.STILL;
  error: null;
}

export interface StillRequestableWithoutData extends Request {
  data: null;
  status: RequestStatus.STILL;
  error: null;
}

export interface LoadingRequestable extends Request {
  data: null;
  status: RequestStatus.LOADING;
  error: null;
}

export interface LoadingRequestableWithData<Data extends any = null> extends Request<Data> {
  data: Data;
  status: RequestStatus.LOADING;
  error: null;
}

export interface SuccessRequestable<Data extends any = null> extends Request<Data> {
  data: Data;
  status: RequestStatus.SUCCESS;
  error: null;
}

export interface FailedRequestable<Data extends any = null, ErrorData extends Hash = Hash>
  extends Request<Data> {
  data: Data;
  status: RequestStatus.FAILURE;
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
