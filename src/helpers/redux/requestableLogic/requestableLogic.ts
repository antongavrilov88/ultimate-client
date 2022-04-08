import { FailedRequestable, Requestable, RequestableWithInitialData } from 'types/Requestable';
import { RequestStatus } from 'shared/constants';
import { FailureStatus, LoadingStatus, SuccessStatus } from './types';
import { Hash } from '../../../types/utils';

const loadingStatus: LoadingStatus = () => ({
  data: null,
  status: RequestStatus.LOADING,
  error: null,
});

loadingStatus.withData = <Data extends any = null>({
  data,
}: RequestableWithInitialData<Data> | Requestable<Data>) => ({
  data: data as Data,
  status: RequestStatus.LOADING,
  error: null,
});

const successStatus: SuccessStatus = <Data extends any = null>({
  data,
}: RequestableWithInitialData<Data> | Requestable<Data>) => ({
  data: data as Data,
  status: RequestStatus.SUCCESS,
  error: null,
});
successStatus.pushPayload = (payload) => ({
  data: payload,
  status: RequestStatus.SUCCESS,
  error: null,
});
successStatus.extractFromPayload = (dataExtractor) => (payload) => ({
  data: dataExtractor(payload),
  status: RequestStatus.SUCCESS,
  error: null,
});

const failureStatus: FailureStatus = <ErrorData extends Hash>(
  { data }: RequestableWithInitialData<any, ErrorData> | Requestable<any, ErrorData>,
  payload: ErrorData
): FailedRequestable<ErrorData> => ({
  data,
  status: RequestStatus.FAILURE,
  error: payload,
});

export { loadingStatus, successStatus, failureStatus };
