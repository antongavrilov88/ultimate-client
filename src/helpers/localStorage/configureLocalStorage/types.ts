import { LOCAL_STORAGE_KEYS } from 'enums/uiEnums';
import { LocalStorageValue } from 'types/uiTypes';

export interface ConfigureLocalStorage {
  (key: LOCAL_STORAGE_KEYS, value: LocalStorageValue): void;
}
