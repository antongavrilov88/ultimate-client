import { SPACES } from '../../labels';
import { spaceValues } from '../../values';

const spaces: Record<SPACES, string | number> = {
  [SPACES.SPACE_ZERO]: spaceValues.PX_0,
  [SPACES.SPACE_EXTRA_TINY]: spaceValues.PX_2,
  [SPACES.SPACE_TINY]: spaceValues.PX_4,
  [SPACES.SPACE_SMALL]: spaceValues.PX_8,
  [SPACES.SPACE_MEDIUM]: spaceValues.PX_14,
  [SPACES.SPACE_BASE]: spaceValues.PX_16,
  [SPACES.SPACE_LARGE]: spaceValues.PX_24,
  [SPACES.SPACE_BIG]: spaceValues.PX_32,
  [SPACES.SPACE_EXTRA_BIG]: spaceValues.PX_48,
};

export { spaces };
