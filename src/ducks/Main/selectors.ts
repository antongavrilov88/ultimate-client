import { createGetter } from '../../helpers/redux';
import { STATE_PART } from '../../shared/constants';
import { getMainState } from '../rootSelector';
import { UI_THEMES } from '../../enums/uiEnums';
import { FeatureSelector, RootState } from '../types';

const fromMainState = createGetter(getMainState);

const getTheme: FeatureSelector<RootState, UI_THEMES> = fromMainState(STATE_PART.THEME);

export { getTheme };
