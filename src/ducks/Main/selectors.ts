import { createGetter } from '../../helpers/redux';
import { StatePart } from '../../shared/constants';
import { getMainState } from '../rootSelector';

const fromMainState = createGetter(getMainState);

const getTheme = fromMainState(StatePart.THEME);

export { getTheme };
