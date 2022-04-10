import { LOCAL_STORAGE_KEYS } from 'enums/uiEnums';
import { Nullable } from 'types/utils';

export interface GetFromLocalStorage {
  (key: LOCAL_STORAGE_KEYS): Nullable<string>;
}
