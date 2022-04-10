import { ConfigureLocalStorage } from './types';

const configureLocalStorage: ConfigureLocalStorage = (key, value) => {
  if (value) localStorage.setItem(key, value);
};

export { configureLocalStorage };
