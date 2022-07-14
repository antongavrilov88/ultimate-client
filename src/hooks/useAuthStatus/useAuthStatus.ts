import { authActions } from 'ducks/Auth/actions';
import { getAuthStatus } from 'ducks/Auth/selectors';
import { getLocalStorageToken } from 'helpers/localStorage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseAuthStatus } from './types';

const useAuthStatus: UseAuthStatus = () => {
  const [isAuthorised, setIsAuthorised] = useState<boolean>(false);

  const isReduxToken = useSelector(getAuthStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isReduxToken) {
      setIsAuthorised(true);
    } else {
      const localStorageToken = getLocalStorageToken();
      if (localStorageToken) {
        dispatch(authActions.setToken(localStorageToken));
      } else {
        setIsAuthorised(false);
      }
    }
  }, [isReduxToken]);

  return isAuthorised;
};

export { useAuthStatus };
