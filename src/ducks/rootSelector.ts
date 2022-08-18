import { prop } from 'ramda';
import { STATE_PART } from '../shared/constants';
import { CreateRootGetter } from './types';

const createRootGetter: CreateRootGetter = prop;

const getMainState = createRootGetter(STATE_PART.MAIN);
const getAuthState = createRootGetter(STATE_PART.AUTH);

export { getMainState, getAuthState };
