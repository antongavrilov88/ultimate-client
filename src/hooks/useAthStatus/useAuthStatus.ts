import { authActions } from 'ducks/Auth/actions';
import { getAuthStatus } from 'ducks/Auth/selectors';
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
      const localStorageToken = localStorage.getItem('token');
      if (localStorageToken) {
        dispatch(authActions.setToken(localStorageToken));
      }
    }
  }, [isReduxToken]);

  return isAuthorised;
};

export { useAuthStatus };
