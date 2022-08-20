import { PADDINGS } from '../../labels';
import { paddingValues } from '../../values';

const paddings: Record<PADDINGS, string> = {
  [PADDINGS.SUPER_TINY]: paddingValues.PX_5,
  [PADDINGS.SMALL]: paddingValues.PX_20,
  [PADDINGS.MEDIUM]: paddingValues.PX_50,
};

export { paddings };
