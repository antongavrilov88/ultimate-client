import { LOCAL_STORAGE_KEYS } from 'enums/uiEnums';
import { LocalStorageValue } from 'types/uiTypes';
import { Nullable } from 'types/utils';

export interface GetFromLocalStorage {
  (key: LOCAL_STORAGE_KEYS): Nullable<LocalStorageValue>;
}
