import {
  FailedRequestable,
  LoadingRequestable,
  LoadingRequestableWithData,
  Requestable,
  RequestableWithInitialData,
  SuccessRequestable,
} from 'types/Requestable';
import { AppError } from '../../../types/errors/AppError';
import { Hash } from '../../../types/utils';

export interface LoadingStatus {
  (): LoadingRequestable;
  withData<Data extends any = null>(
    requestable: RequestableWithInitialData<Data> | Requestable<Data>
  ): LoadingRequestableWithData<Data>;
}

export interface SuccessStatus {
  <Data>(
    requestable: RequestableWithInitialData<Data> | Requestable<Data>
  ): SuccessRequestable<Data>;
  pushPayload<Data extends any>(payload: Data): SuccessRequestable<Data>;
  extractFromPayload<PayloadData extends any, Data extends any = null>(
    dataExtractor: (payload: PayloadData) => Data
  ): (payload: PayloadData) => SuccessRequestable<Data>;
}

export interface FailureStatus {
  <ErrorData extends Hash>(
    requestable: RequestableWithInitialData<any, ErrorData> | Requestable<any, ErrorData>,
    payload: ErrorData
  ): FailedRequestable<ErrorData>;
}
