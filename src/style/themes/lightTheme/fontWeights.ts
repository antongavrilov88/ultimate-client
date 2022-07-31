import { FONT_WEIGHTS } from '../../labels';
import { typographyValues } from '../../values';

const fontWeights: Record<FONT_WEIGHTS, number> = {
  [FONT_WEIGHTS.BASE]: typographyValues.FONT_WEIGHT_400,
  [FONT_WEIGHTS.SEMI_BOLD]: typographyValues.FONT_WEIGHT_600,
  [FONT_WEIGHTS.BOLD]: typographyValues.FONT_WEIGHT_700,
  [FONT_WEIGHTS.EXTRA_BOLD]: typographyValues.FONT_WEIGHT_900,
};

export { fontWeights };
