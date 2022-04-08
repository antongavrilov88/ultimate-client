import { createGetter } from '../../../helpers/redux';
import { StatePart } from '../../constants';
import { getMainState } from '../rootSelector';

const fromMainState = createGetter(getMainState);

const getTheme = fromMainState(StatePart.THEME);

export { getTheme };
