import { GetFromLocalStorage } from './types';

const getFromLocalStorage: GetFromLocalStorage = (key) => localStorage.getItem(key) || null;

export { getFromLocalStorage };
