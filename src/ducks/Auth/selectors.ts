import { createGetter } from '../../helpers/redux';
import { getAuthState } from '../rootSelector';
import { StatePart } from '../../shared/constants';

const fromAuthState = createGetter(getAuthState);

const getAuthStatus = fromAuthState(StatePart.SUCCESS);

const getRequestStatus = fromAuthState(StatePart.STATUS);

const getRequestError = fromAuthState(StatePart.ERROR);

const getUsersEmail = fromAuthState(StatePart.EMAIL);

export { getAuthStatus, getRequestStatus, getRequestError, getUsersEmail };
