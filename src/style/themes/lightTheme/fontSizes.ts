import { FONT_SIZES } from '../../labels/typography';
import { typographyValues } from '../../values';

const fontSizes: Record<FONT_SIZES, string> = {
  [FONT_SIZES.EXTRA_SMALL]: typographyValues.FONT_SIZE_12,
  [FONT_SIZES.SMALL]: typographyValues.FONT_SIZE_14,
  [FONT_SIZES.BASE]: typographyValues.FONT_SIZE_16,
  [FONT_SIZES.LARGE_BASE]: typographyValues.FONT_SIZE_18,
  [FONT_SIZES.LARGE]: typographyValues.FONT_SIZE_20,
  [FONT_SIZES.EXTRA_LARGE]: typographyValues.FONT_SIZE_24,
  [FONT_SIZES.EXTRA_EXTRA_LARGE]: typographyValues.FONT_SIZE_40,
  [FONT_SIZES.GIANT]: typographyValues.FONT_SIZE_100,
};

export { fontSizes };
