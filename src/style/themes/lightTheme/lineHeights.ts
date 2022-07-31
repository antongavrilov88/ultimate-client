import { LINE_HEIGHTS } from '../../labels';
import { typographyValues } from '../../values';

const lineHeights: Record<LINE_HEIGHTS, number> = {
  [LINE_HEIGHTS.EXTRA_EXTRA_EXTRA_SMALL]: typographyValues.LINE_HEIGHT_12,
  [LINE_HEIGHTS.EXTRA_EXTRA_SMALL]: typographyValues.LINE_HEIGHT_14,
  [LINE_HEIGHTS.EXTRA_SMALL]: typographyValues.LINE_HEIGHT_16,
  [LINE_HEIGHTS.BASE]: typographyValues.LINE_HEIGHT_20,
  [LINE_HEIGHTS.SMALL]: typographyValues.LINE_HEIGHT_20,
  [LINE_HEIGHTS.LARGE]: typographyValues.LINE_HEIGHT_24,
  [LINE_HEIGHTS.EXTRA_LARGE]: typographyValues.LINE_HEIGHT_32,
  [LINE_HEIGHTS.EXTRA_EXTRA_LARGE]: typographyValues.LINE_HEIGHT_40,
  [LINE_HEIGHTS.GIANT]: typographyValues.LINE_HEIGHT_100,
};

export { lineHeights };
