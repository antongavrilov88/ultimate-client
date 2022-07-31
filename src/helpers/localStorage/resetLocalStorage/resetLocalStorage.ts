import { LOCAL_STORAGE_KEYS } from '../../../enums/uiEnums';

const resetLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.EMAIL);
};

export { resetLocalStorage };
