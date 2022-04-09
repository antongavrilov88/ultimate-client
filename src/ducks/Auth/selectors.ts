import { createGetter } from '../../helpers/redux';
import { getAuthState } from '../rootSelector';
import { StatePart } from '../../shared/constants';

const fromAuthState = createGetter(getAuthState);

const getAuthStatus = fromAuthState(StatePart.SUCCESS);

export { getAuthStatus };
