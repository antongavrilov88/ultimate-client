import { BORDER_RADIUSES } from '../../labels';
import { borderValues } from '../../values';

const borderRadiuses: Record<BORDER_RADIUSES, string> = {
  [BORDER_RADIUSES.SMALL]: borderValues.PX_3,
  [BORDER_RADIUSES.MEDIUM]: borderValues.PX_5,
  [BORDER_RADIUSES.LARGE]: borderValues.PX_7,
};

export { borderRadiuses };
