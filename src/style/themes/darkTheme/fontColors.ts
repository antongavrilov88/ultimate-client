import { FONT_COLORS } from '../../labels';
import { colorValues } from '../../values';

const fontColors: Record<FONT_COLORS, string> = {
  [FONT_COLORS.ACTIVE]: colorValues.BLUE,
  [FONT_COLORS.PRIMARY]: colorValues.WHITE,
  [FONT_COLORS.DANGER]: colorValues.RED,
};

export { fontColors };
