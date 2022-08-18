import { createGetter } from '../../helpers/redux';
import { getAuthState } from '../rootSelector';
import { STATE_PART } from '../../shared/constants';

const fromAuthState = createGetter(getAuthState);

const getAuthStatus = fromAuthState(STATE_PART.SUCCESS);

const getRequestStatus = fromAuthState(STATE_PART.STATUS);

const getRequestError = fromAuthState(STATE_PART.ERROR);

const getUsersEmail = fromAuthState(STATE_PART.EMAIL);

export { getAuthStatus, getRequestStatus, getRequestError, getUsersEmail };
