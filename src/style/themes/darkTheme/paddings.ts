import { PADDINGS } from '../../labels';
import { paddingValues } from '../../values';

const paddings: Record<PADDINGS, string> = {
  [PADDINGS.SMALL]: paddingValues.PX_20,
  [PADDINGS.MEDIUM]: paddingValues.PX_50,
};

export { paddings };
