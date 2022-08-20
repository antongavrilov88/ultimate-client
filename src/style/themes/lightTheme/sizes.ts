import { SIZES } from '../../labels';
import { sizeValues } from '../../values';

const sizes: Record<SIZES, string> = {
  [SIZES.BASE_HEIGHT]: sizeValues.PERCENT_100,
  [SIZES.BASE_WIDTH]: sizeValues.PERCENT_100,
  [SIZES.FIT_CONTENT]: sizeValues.FIT_CONTENT,

  [SIZES.SMALL]: sizeValues.PX_42,
};

export { sizes };
