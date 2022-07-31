import { AccessToken, UsersEmail } from 'ducks/Auth/types';
import { LOCAL_STORAGE_KEYS, UI_THEMES } from 'enums/uiEnums';
import { configureLocalStorage } from './configureLocalStorage';

const configureLocalStorageToken = (token: AccessToken) =>
  configureLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, token);
const configureLocalStorageTheme = (theme: UI_THEMES) =>
  configureLocalStorage(LOCAL_STORAGE_KEYS.THEME, theme);
const configureLocalStorageEmail = (email: UsersEmail) =>
  configureLocalStorage(LOCAL_STORAGE_KEYS.EMAIL, email);

export {
  configureLocalStorage,
  configureLocalStorageToken,
  configureLocalStorageTheme,
  configureLocalStorageEmail,
};
