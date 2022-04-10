import { LOCAL_STORAGE_KEYS } from 'enums/uiEnums';
import { configureLocalStorage } from './configureLocalStorage';
import { resetLocalStorage } from './resetLocalStorage';
import { getFromLocalStorage } from './getFromLocalStorage';

const getLocalStorageToken = () => getFromLocalStorage(LOCAL_STORAGE_KEYS.TOKEN);
const getLocalStorageTheme = () => getFromLocalStorage(LOCAL_STORAGE_KEYS.THEME);

export {
  configureLocalStorage,
  resetLocalStorage,
  getFromLocalStorage,
  getLocalStorageToken,
  getLocalStorageTheme,
};
