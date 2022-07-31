import { authActions } from 'ducks/Auth/actions';
import { getUsersEmail } from 'ducks/Auth/selectors';
import { getLocalStorageEmail } from 'helpers/localStorage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseUserData } from './types';
import { Nullable } from '../../types/utils';

const useUserEmail: UseUserData = () => {
  const [usersEmail, setUsersEmail] = useState<Nullable<string>>(null);

  const reduxEmail = useSelector(getUsersEmail);

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxEmail) {
      setUsersEmail(reduxEmail);
    } else {
      const localStorageEmail = getLocalStorageEmail();
      if (localStorageEmail) {
        dispatch(authActions.setEmail(localStorageEmail));
      } else {
        setUsersEmail(null);
      }
    }
  }, [reduxEmail]);

  return usersEmail;
};

export { useUserEmail };
