import { COLORS, FONT_COLORS } from '../../labels';
import { colorValues } from '../../values';

const colors: Record<COLORS, string> = {
  [COLORS.BACKGROUND]: colorValues.BLACK,
  [COLORS.PRIMARY]: colorValues.GREEN,
  [COLORS.BORDER_COLOR]: colorValues.LIGHT_GREY,
  [COLORS.DANGER]: colorValues.RED,
  [COLORS.DISABLED_ELEMENT_BORDER]: colorValues.SUPER_LIGHT_GREY,
  [COLORS.DEFAULT]: colorValues.WHITE,
  [COLORS.OUTLINED_ELEMENT_BORDER]: colorValues.GREY,
  [FONT_COLORS.DANGER]: colorValues.RED,
};

export { colors };
