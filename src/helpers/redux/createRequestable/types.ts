import { Requestable, RequestableWithInitialData } from 'types/Requestable';
import { Hash } from 'types/utils';

export interface CreateRequestable {
  <Data extends any = null, ErrorData extends Hash = Hash>(): Requestable<Data, ErrorData>;
  <Data extends any = null, ErrorData extends Hash = Hash>(initialData: Data): Requestable<
    Data,
    ErrorData
  >;
}
