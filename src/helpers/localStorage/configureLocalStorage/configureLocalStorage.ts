import { ConfigureLocalStorage } from './types';

const configureLocalStorage: ConfigureLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

export { configureLocalStorage };
