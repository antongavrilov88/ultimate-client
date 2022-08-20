import { REQUEST_STATUS } from 'shared/constants';
import { Requestable, RequestableWithInitialData } from 'types/Requestable';
import { Hash } from 'types/utils';
import { CreateRequestable } from './types';

const createRequestable: CreateRequestable = <
  Data extends any = null,
  ErrorData extends Hash = Hash
>(
  initialData?: Data
): Requestable<Data, ErrorData> | RequestableWithInitialData<Data, ErrorData> => {
  if (initialData === undefined) return { data: null, status: REQUEST_STATUS.STILL, error: null };
  return { data: initialData, status: REQUEST_STATUS.STILL, error: null };
};

export { createRequestable };
