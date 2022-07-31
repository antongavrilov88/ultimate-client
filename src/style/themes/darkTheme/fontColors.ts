import { FONT_COLORS } from '../../labels/fontColors';
import { colorValues } from '../../values/colorValues';

const fontColors: Record<FONT_COLORS, string> = {
  [FONT_COLORS.PRIMARY]: colorValues.WHITE,
  [FONT_COLORS.DANGER]: colorValues.RED,
};

export { fontColors };
