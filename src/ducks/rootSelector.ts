import { prop } from 'ramda';
import { StatePart } from '../shared/constants';
import { CreateRootGetter } from './types';

const createRootGetter: CreateRootGetter = prop;

const getMainState = createRootGetter(StatePart.MAIN);
const getAuthState = createRootGetter(StatePart.AUTH);

export { getMainState, getAuthState };
